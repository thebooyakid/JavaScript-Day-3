const getData = async () => {
    let response = await axios.get(`http://ergast.com/api/f1/2020/1/driverstandings.json`)
    console.log(response.data)
    return response.data
}
const DOM_Elements = {
    racer_list : '.racer-list'
}

const create_list = (position,givenName,nationality,sponsor,points) => {
    const html = `<a href="#" class="list-group-item, list-group-item-action list-group-item-light" id="${position}">${givenName} </a>`;
    document.querySelector(DOM_Elements.racer_list).insertAdjacentHTML('beforeend',html)
}

const load_data = async () => {
    const racers = await getData();
    //x = racers.MRData.StadingsTable.StandingsLists[0]//.DriverStandings.position
    c//onsole.log(x)
    racers.getElementBy(element => create_list(element.MRData.StandingsTable.StandingsLists.DriverStandings.position,element.StandingsTable.StandingsLists.DriverStandings.Driver.givenName))
}

const clear_data = () => {
    document.querySelector(DOM_Elements.racer_list).innerHTML = '';
}









