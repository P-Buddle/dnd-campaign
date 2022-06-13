import React from 'react'
import { Link } from 'react-router-dom'

const MainStory = () => {
  return (
    <div>
        <div className='title-container'>
            <h1>The Story So Far...</h1>
        </div>
            
            <p>
                <em>The Southern Realm bakes beneath an unforgiving and seemingly endless summer heat.
                <br/>
                The once fertile farmland that surrounded the great capital of Lothondria is now a barren and dry. </em>
            </p>
        
            <p>
                Meanwhile, Alan, Castor, Thex and Vin leave Lothondria in the dead of night, having received an anonymous tip off that you are in danger.
            </p>
            <p>
                After a strange encounter with some cannibal halflings, you meet Cheese on the road. He is surprised to see you as you are currently fugitives wanted for the murder of the <Link to='/factions/guilds'>Guild Leaders </Link> of Lothondria. 
                It would seem you've been framed!
            </p>
            <p>
                With the guards hot on your trail you head North, aiming for the border.
            </p>
            <p>
                Emerging from an underground chamber, where you discovered a mysterious amulet you are ambushed by the city guard, who had managed to track you!
            </p>
            <p>
                Managing to defeat them, you then find yourselves face to face with Valencia
            </p>
            <p>
                Turns out that not only does she believe you to be innocent, but that she suspects the real culprit is the Arch-Mage Artorius. In exchange for a large amount of coin (120 platinum each), and the chance to prove your innocence, she asks you to find the Arch-Mage and investigate.
            </p>
            <p>
                You travel into to the Northern Realm via the smugglers tunnel underneath [the spine], whilst helping members of <Link to='/factions/gangs'><u>The Mollasses Gang</u> </Link> to recover some lost cargo.
            </p>
            <p>
                North of the mountains you encounter <Link to='/people/calvin'><u>Sir Calvin Klein and his squire Paco</u> </Link>, who are on a quest to find [the halls of heraldry], on behalf of [King Ellesburg]. 
                In exchange for your assistance they take you into <Link to='/places/vorkhana'><u>Vorkhana</u> </Link>, the rumoured location of the Arch-Mage.
            </p>

            <p>
                Creating a clever diversion, using your false identity as travelling performers, three of you sneak into the Arch-Mages office, only to find that he too has been murdered...
                You find a series of clues, and head out into the night!
            </p>
         

    </div>
  )
}

export default MainStory