
//It may be better to have the user point to a user object
//This would allow people to click on the user's name to get
//to their profile, Same thing for vinyl object.


export const HomeScreenData = [ 
  {
    user: {
      username: "PolandSprings52",
      image: "../Resources/Temp_Images/vinyl_3",
    },
    post: {
      time: "13:23:54",
      date: "12/21/2020",
      vinyl: {
        name: "III",
        artist: "The Lumineers",
        coverArt: "../Resources/Temp_Images/vinyl_1",
        label: "Decca - 00602577489181",
        format: "2 x Vinyl, LP, Album",
        country: "Europe",
        released: "Sep 13, 2019",
        genre: "Rock",
        style: "",
        tracklist: {
          s1: "Gloria Sparks",
          s2: "Donna",
          s3: "Life In The City",
          //And so on
        }
      },
      comments: {
        c1: {
          user: "John Doe",
          text: "So amazing!",
          time: "13:24:30",
          date: "12/21/2020",
        },
        c2: {
          user: "Jane Goodall",
          text: "New fav!! <3",
          time: "15:30:24",
          date: "12/21/2020",
        },
      },
    },
  },
  {
    user: {
      username: "BaseCountry1972",
      image: "../Resources/Temp_Images/vinyl_4",
    },
    post: {
      time: "15:41:25",
      date: "12/22/2020",
      vinyl: {
        name: "Elephant",
        artist: "The White Stripes",
        coverArt: "../Resources/Temp_Images/vinyl_2",
        label: "",
        format: "",
        country: "",
        released: "2003",
        genre: "Rock",
        style: "Blues Rock, Garage Rockm Alternative Rock",
        tracklist: {
          s1: "Seven Nation Army",
          s2: "Black Math",
          s3: "There's No Home For You Here",
          //And so on
        }
      },
      comments: {
        c1: {
          user: "Lilly Silverson",
          text: "Such a classic!",
          time: "17:20:19",
          date: "12/22/2020",
        },
        c2: {
          user: "Joe Green",
          text: "Seven Nation Army is (and will forever be) my favorite song!",
          time: "23:47:01",
          date: "12/22/2020",
        },
        c3: {
          user: "Lilly Silverson",
          text: "Yes Joe! I love that song!",
          time: "09:13:20",
          date: "12/23/2020",
        },
        c4: {
          user: "Justine Michelson",
          text: "All the songs on this album are just so frickin amazing",
          time: "19:42:59",
          date: "12/23/2020",
        },
      },
    },
  }
];