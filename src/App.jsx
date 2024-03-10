import './App.css';
import { useEffect, useState } from 'react';
import Card from './components/Card';

const flashcardsData = [
  { front: "(f) rue", back: "street", color: "blue", imageUrl: "src/assets/street.jpg" },
  { front: "(f) maison", back: "house", color: "blue", imageUrl: "src/assets/house.jpg" },
  { front: "grand(e)", back: "big", color: "red"},
  { front: "avoir", back: "to have", color: "green"},
  { front: "petit(e)", back: "small", color: "red"},
  { front: "être", back: "to be", color: "green"},
  { front: "faire", back: "to do", color: "green"},
  { front: "bon(ne)", back: "good", color: "red"},
  { front: "(f) voiture", back: "car", color: "blue", imageUrl: "src/assets/car.jpg"},
  { front: "(m) homme", back: "man", color: "blue", imageUrl: "src/assets/man.jpg"}
];

const shuffleArr = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
  // shuffles any array
}

const App = () => {

  const [count, setCount] = useState(0);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false); // Add state for flipped status

useEffect(() => {
  shuffleFlashcards();
}, []); // this runs on the initial render

const shuffleFlashcards = () => {
  setCurrentCardIndex(0); // reset cards to the first one in the series
  setCount(0);
  setIsFlipped(false);
  shuffleArr(flashcardsData);
}

  const handleNextCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % flashcardsData.length);
    setCount(count + 1);
    setIsFlipped(false);
  };

  const handleCardFlip = () => {
    setIsFlipped(!isFlipped); // Toggle flipped state
  };


  return (
    <div className="App">
      <h1>French Vocab Fanatic</h1>
      <h2>Let's check your French vocabulary!</h2>
      <h3>Number of Cards Done: {count}</h3>

      {/* {flashcards.map((flashcard, index) => (
        <Card
        key={index}
        front={flashcard.front}
        back={flashcard.back}
        color={flashcard.color}
        />
      ))} */}

      <Card
        front={flashcardsData[currentCardIndex].front}
        back={flashcardsData[currentCardIndex].back}
        color={flashcardsData[currentCardIndex].color}
        isFlipped={isFlipped} // Pass flipped state to Card component
        imageUrl={flashcardsData[currentCardIndex].imageUrl}
        onCardClick={handleCardFlip}
      />

        <div className='button-container'>
          <button onClick={handleNextCard}>Next</button>
          <button onClick={shuffleFlashcards}>Shuffle!</button>
        </div>
    </div>
  );
};

export default App
