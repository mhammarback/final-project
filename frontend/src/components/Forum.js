import React, { useState ,useEffect } from 'react'

import { StoryInput } from './StoryInput'
import { StoryList } from '../components/StoryList'
import { FactContainer } from '../lib/Container'

export const Forum = () => {
	const [storys, setStorys] = useState([])
	
	const STORY_URL = 'https://final-project-technigo.herokuapp.com/forum'

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
	
	const postSingleStory = (message) => {
		fetch(STORY_URL, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ message: message })
		})
		.then(() => fetchStorys())
		.catch(error => console.error(error))
  }
  
  const onLiked = storyId => {
    const updatedStory = storys.map(story => {
      if (story._id === storyId ) {
         story.hearts += 1
        }
      return story
      })
      setStorys(updatedStory)
    }

	return(
		<FactContainer>
			<StoryInput onMessageChange={postSingleStory} />
			{storys.map((story) => (
					<StoryList 
					key={story._id}
          story={story} 
          onLiked={onLiked}
					/>
			))}
		</FactContainer>
	)
}

