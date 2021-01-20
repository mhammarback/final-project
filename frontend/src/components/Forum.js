import React, { useState ,useEffect } from 'react'

import { StoryInput } from './StoryInput'
import { StoryList } from '../components/StoryList'

export const Forum = () => {
	const [storys, setStorys] = useState([])
	
	const STORY_URL = 'https://nice-thoughts-api.herokuapp.com/thoughts'

	useEffect(() => {
  fetchStorys()
	}, [])

	const fetchStorys = () => {
		fetch(STORY_URL) 
		.then((response) => {
			return response.json()
		})
		.then (data => {
			const filteredStorys = data.filter(story => {
				return story !== ''
			})
			setStorys(filteredStorys)
		})
	}
	
	const postSingleStory = newStory => {
		fetch(STORY_URL, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ text: newStory})
		})
		.then(() => fetchStorys())
		.catch(error => console.error.apply(error))
	}

	return(
		<section>
			<StoryInput onMessageChange={postSingleStory} />
			{storys.map((story) => (
					<StoryList 
					key={story._id}
					story={story} 
					/>
			))}
		</section>
	)
}