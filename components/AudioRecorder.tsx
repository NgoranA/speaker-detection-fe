'use client'
import React, { useState, useEffect, useRef } from 'react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

const AudioRecorder: React.FC = () => {
	const [isRecording, setIsRecording] = useState(false);
	const mediaRecorder = useRef<MediaRecorder | null>(null);
	const audioChunks = useRef<Blob[]>([]);

	useEffect(() => {
		const getMedia = async () => {
			const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
			mediaRecorder.current = new MediaRecorder(stream);

			mediaRecorder.current.ondataavailable = (event: BlobEvent) => {
				audioChunks.current.push(event.data);
			};

			mediaRecorder.current.onstop = () => {
				const audioBlob = new Blob(audioChunks.current, { type: 'audio/wav' });
				audioChunks.current = [];
				sendAudioFile(audioBlob);
			};
		};

		getMedia().catch(console.error);
	}, []);

	const startRecording = () => {
		setIsRecording(true);
		mediaRecorder.current?.start();
	};

	const stopRecording = () => {
		setIsRecording(false);
		mediaRecorder.current?.stop();
	};

	const sendAudioFile = async (audioBlob: Blob) => {
		const formData = new FormData();
		formData.append('audio', audioBlob, 'audio.wav');

		const response = await fetch('http://your-django-backend-url/api/upload/', {
			method: 'POST',
			body: formData,
		});

		const result = await response.json();
		console.log(result);
		// Process the result as needed
	};

	return (
		<div className='flex flex-col justify-center gap-3'>
			<Button onClick={isRecording ? stopRecording : startRecording} size="lg" className="bg-primary text-white hover:bg-primary-500 transition-colors">
				<MicIcon className={cn(isRecording ?? "animate-pulse", "w-6 h-6 mr-2")} />
				{isRecording ? 'Stop Recording' : 'Start Recording'}
			</Button>
			<div className="grid grid-cols-2 gap-4 w-full">
				<div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 flex flex-col items-center justify-center">
					<div className="text-4xl font-bold">Kartel Belvanie</div>
					<div className="text-gray-500 dark:text-gray-400">Student: M1 | Gender: Female</div>
				</div>
				<div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 flex flex-col items-center justify-center">
					<div className="text-4xl font-bold">Confidence: 92%</div>
					<div className="text-gray-500 dark:text-gray-400">
						The system is highly confident about the speaker&apos;s identity.
					</div>
				</div>
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

