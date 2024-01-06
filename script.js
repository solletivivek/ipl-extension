async function getMatchData() {
    try {
        const response = await fetch("https://api.cricapi.com/v1/currentMatches?apikey=16f3432c-f362-4f9b-8d02-52ae037ea9d6&offset=0");
        const data = await response.json();

        if (data.status !== "success") return [];

        const matchList = data.data;

        if (!matchList) return [];

        const relevantData = matchList.filter(match=> match.series_id=="7f819b4b-9bc8-44d4-8722-c5808ad24a30").map(match => `${match.name} ${match.status}`);
        console.log(relevantData);
        document.getElementById("matches").innerHTML = relevantData.map(match => `<li>${match}</li>`).join('');

        return relevantData;
    } catch (e) {
        console.log(e);
    }
}

// Call the function to fetch and display the data
getMatchData();
