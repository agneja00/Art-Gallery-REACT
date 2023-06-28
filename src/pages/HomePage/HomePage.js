import Topic from "../../components/Topic/Topic"
import Button from "../../components/Button/Button";
import Image from "../../components/Images/Images";
import "./HomePage.css"
import { useState } from "react";

const HomePage = () => {

    const [hasBeenClicked, setHasBeenClicked] = useState(false);

    const handleClickReadMore = () => {
        setHasBeenClicked(true)
    }

    const handleClickLessMore = () => {
        setHasBeenClicked(false)
    }

    return (
        <div className="homePage">
            <Image src="https://art-facts.com/wp-content/uploads/2021/07/Feast_at_the_House_of_Simon-1024x468.jpg" alt="art" />
                <Topic title="Welcome to Modern Art Museum" text="An exceptional opportunity to experience – and meet! – the works of world-renowned artists, such as Guerrilla Girls, Andy Warhol, Yves Klein and the others!" />
                {!hasBeenClicked && <Button label="Read more" onClick={handleClickReadMore} />}
                {hasBeenClicked && <Topic title="What is Modern Art Museum?" text="one of the largest private virtual art collections, the museum collection consists of artworks dating from the 1960s to this day. It includes around 6 000 works of modern and contemporary art. In 2011 the collection was officially recognized as being of “national significance.”" />}
                {hasBeenClicked && <Button label="Less more" onClick={handleClickLessMore} />}
        </div>
    )

}

export default HomePage;