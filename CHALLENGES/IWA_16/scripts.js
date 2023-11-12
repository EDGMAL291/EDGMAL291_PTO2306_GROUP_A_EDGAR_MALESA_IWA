const MONTHS = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]
  
  const data = {
    response: {
      requestType: "FETCH_ATHLETE_DATA",
      requestBy: "ALL_MATCHING_ATHLETES",
      forDisplay: "BEST_RACES",
  
      data: {
        NM372: {
          firstName: "Nwabisa",
          surname: "Masiko",
          id: "NM372",
          races: [
            {
              date: '2022-11-18T20:00:00.000Z',
              time: [9, 7, 8, 6],
            },
            {
              date: '2022-12-02T20:00:00.000Z',
              time: [6, 7, 8, 7],
            },
          ],
        },
  
        SV782: {
          firstName: "Schalk",
          surname: "Venter",
          id: "SV782",
          races: [
            {
              date: '2022-11-18T20:00:00.000Z',
              time: [10, 8, 3, 12],
            },
            {
              date: '2022-11-25T20:00:00.000Z',
              time: [6, 8, 9, 11],
            },
            {
              date: '2022-12-02T20:00:00.000Z',
              time: [10, 11, 4, 8],
            },
            {
              date: '2022-12-09T20:00:00.000Z',
              time: [9, 8, 9, 11],
            },
          ],
        },
      },
    },
  };
  
  // Only edit below this comment
  
  const createHtml = (athlete) => {
    //used destructuring to create 4 variables for each athlete instead of creating each variable one by one. 
    const {firstName, surname, id, races} = athlete;
    //Created a new variable called recentRace and assigned it to the last object of the array (Races) which is the last race containing date and time.
    const recentRace = races[races.length -1];
    //Assigned the Date extracted from the last race to a new variable called date.
    const date = new Date(recentRace.date);

    const fragment = document.createDocumentFragment();

    //this create an element in html <h2>, assigns id of the athlete to the inner text, simply <h2>"id"</h2> and then adds it to the fragment document created above
    const title = document.createElement('h2');
    title.textContent= id;
    fragment.appendChild(title);
    //Created an element in html called dl and assigned it to variable (list). added '' to dl because it is a string in html.
      //fixed month and year variables by adding the write methods to fetch the desired values. getMonth() and getFullYear()
      const day = date.getDate();
      const month = MONTHS[date.getMonth()];//this is going to result in MONTHS[0-11] and refer to the array created above. getMonth() starts at 0
      const year = date.getFullYear();
  
      //used the reducer function to find the sum of all times. 
      const totalMinutes = recentRace.time.reduce((a, b) => a + b, 0);
      const hours = Math.floor(totalMinutes / 60).toString().padStart(2, '0');// used math.floor to remove remainders after dividing by 60.
      const minutes = (totalMinutes % 60).toString().padStart(2, '0'); //used % to get the remainder after dividing by 60(hours) to get minutes
      
    const list = document.createElement('dl');
    //This is the inf that is going to be inside the <dl> element in html
    list.innerHTML = `
        <dt>Athlete</dt>
        <dd>${firstName} ${surname}</dd>

        <dt>Total Races</dt>
        <dd>${races.length}</dd>

        <dt>Event Date (Latest)</dt>
        <dd>${day} ${month} ${year}</dd>

        <dt>Total Time (Latest)</dt>
        <dd>${hours}:${minutes}</dd>`;
    //this is to add the list variable to the fragment document.
    fragment.appendChild(list);
    
    return fragment;    
  }
  
  Object.values(data.response.data).forEach(athlete => {
    const section = document.querySelector(`[data-athlete="${athlete.id}"]`);
    section.appendChild(createHtml(athlete));
  });
  