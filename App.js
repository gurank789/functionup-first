import React from "react";
import ProfileCard from './ProfileCard';

const users = [
  {
    name: 'Raju shrivastava',
    designation: ' Stand-up Comedian',
    jodDescription: 'Satya Prakash Srivastav (25 December 1963 – 21 September 2022), known professionally as Raju Srivastav and often credited as Gajodhar, was an Indian comedian, actor and politician.[1] He was born in Kanpur, Uttar Pradesh, and moved to Mumbai in the 1980s to work in the Hindi film industry.',
    image : 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Raju-Srivastav.jpg'
  },
  {
    name: 'jasmine patel',
    designation: ' ui designer',
    jodDescription: 'Satya Prakash SriHarry Potter is a series of seven fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry.vastav (25 December 1963 – 21 September 2022), known professionally as Raju Srivastav and often credited as Gajodhar, was an Indian comedian, actor and politician.[1] He was born in Kanpur, Uttar Pradesh, and moved to Mumbai in the 1980s to work in the Hindi film industry.',
    image :'https://static.independent.co.uk/2023/04/05/09/newFile-7.jpg?quality=75&width=990&crop=2690%3A2018%2Csmart&auto=webp'
  },
  {
    name: 'David lee',
    designation: ' ui designer',
    jodDescription: 'Satya PrakasDavid Lee is an American former professional basketball player. He played college basketball for the Florida Gators before he was drafted 30th overall by the New York Knicks in the 2005 NBA draft. He was a 2-time NBA All-Star and was selected to the All-NBA Third Team in 2013.h SriHarry Potter is a series of seven fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry.vastav (25 December 1963 – 21 September 2022), known professionally as Raju Srivastav and often credited as Gajodhar, was an Indian comedian, actor and politician.[1] He was born in Kanpur, Uttar Pradesh, and moved to Mumbai in the 1980s to work in the Hindi film industry.',
    image : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FDavid_Lee_%2528basketball%2529&psig=AOvVaw0fiWkn-ikztMz4mKX8OGvG&ust=1682451424758000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCLCQuY6iw_4CFQAAAAAdAAAAABAE'
  }
];
const App = () =>{
  return(
    <div className="app">
      {users.map(user =>(
        <ProfileCard
        key={user.name}
        name={user.name}
        designation={user.designation}
        jobDescription={user.jodDescription}
        image={user.image}
        />
      ))

      }
    </div>
  );
};

export default App;
