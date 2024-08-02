async function compoundInterest(event){
  event.preventDefault(); //Prevent default form submission behavior

  const p = document.getElementById("principal").value;
  const r = document.getElementById("rate").value;
  const time = document.getElementById("time").value;
  const result = document.getElementById("result");

  try{
      const response = await fetch(`https://compoundinterest-server.onrender.com/compoundinterest?principal=${p}&rate=${r}&time=${time}`);
      const data = await response.json()

      result.innerHTML = `
        <h2>Result</h2>
        <p>Final Amount: ${data.amount}</p>
        <p>Interest on Amount: ${data.compoundInterest}</p>
        `;
  }
  catch(e){
    resultDiv.innerHTML = "Error: Unable to fetch data.";
  }
}