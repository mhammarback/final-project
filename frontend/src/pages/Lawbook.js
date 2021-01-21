import React from 'react'

import { SmallCard } from '../lib/Cards'

export const Lawbook = () => {
  return (
		<section className ="container">
			<div className ="lawbook">
				<SmallCard />
				<div className ="lawbook-header">
					<p className="small-header">What does the lawbook say about consent?</p>
					<p>more text</p>
				</div>
			</div>
			<div className="lawbook-opposite">
				<SmallCard />
				<div className ="lawbook-header">
					<p className="small-header">What does that mean in practice?</p>
					<p>More text</p>
				</div>
			</div>
		</section>
  )
}