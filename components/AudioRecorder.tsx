'use client'
import React, { useState, useEffect, useRef } from 'react';
import { toast } from 'sonner';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

interface RecorderResult {
	confidence: number;
	predictedLabel: string;
}

const AudioRecorder: React.FC = () => {
	const [isRecording, setIsRecording] = useState(false);
	const [audioURL, setAudioURL] = useState<string | null>(null);
	const [isLoading, setIsLoading] = useState(false); // New loading state
	const mediaRecorder = useRef<MediaRecorder | null>(null);
	const audioChunks = useRef<Blob[]>([]);
	const [prediction, setPrediction] = useState<RecorderResult | null>(null)

	const startRecording = async () => {
		const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
		mediaRecorder.current = new MediaRecorder(stream);

		mediaRecorder.current.ondataavailable = (event: BlobEvent) => {
			audioChunks.current.push(event.data);
		};

		mediaRecorder.current.onstop = () => {
			const audioBlob = new Blob(audioChunks.current, { type: 'audio/wav' });
			const url = URL.createObjectURL(audioBlob);
			setAudioURL(url);
			audioChunks.current = [];
			sendAudioFile(audioBlob);
		};

		setIsRecording(true);
		mediaRecorder.current.start();
	};

	const stopRecording = () => {
		setIsRecording(false);
		mediaRecorder.current?.stop();
	};

	const sendAudioFile = async (audioBlob: Blob) => {
		setIsLoading(true); // Start loading		
		toast("Smile :) we are detecting who you are.", { position: "top-right", id: "predicting" })
		const formData = new FormData();
		formData.append('file', audioBlob, 'audio.wav');
		try {
			const response = await fetch('https://speaker-detection-app-backend.onrender.com/predict', {
				method: 'POST',
				body: formData,
			});

			const result = await response.json();
			setPrediction({
				predictedLabel: result.predicted_label,
				confidence: result.confidence
			})
			if (result) toast.dismiss("predicting");
		} catch (error) {
			toast("Something happened!", { style: { backgroundColor: "orangered", color: "black" } })
		} finally {
			setIsLoading(false)
		}
	};

	return (
		<div className='flex flex-col justify-center gap-3'>
			<Button onClick={isRecording ? stopRecording : startRecording} size="lg" className="bg-primary text-white hover:bg-primary-500 transition-colors">
				<MicIcon className={cn({ "animate-pulse": isRecording }, "w-6 h-6 mr-2")} />
				{isRecording ? 'Stop Recording' : 'Start Recording'}
			</Button>
			<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
				{
					prediction && !isLoading && (
						<>
							<div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 flex flex-col items-center justify-center">
								<div className="text-4xl font-bold">{prediction.predictedLabel}</div>
							</div>
							<div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 flex flex-col items-center justify-center">
								<div className="text-3xl font-bold">Confidence: {(prediction.confidence * 100).toFixed(2)}%</div>
								<div className="text-gray-500 dark:text-gray-400">
									The system is highly confident about the speaker&apos;s identity.
								</div>
							</div>

						</>

					)
				}
			</div>
		</div>
	);
};


function MicIcon(props: any) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
			<path d="M19 10v2a7 7 0 0 1-14 0v-2" />
			<line x1="12" x2="12" y1="19" y2="22" />
		</svg>
	)
}

export default AudioRecorder;

