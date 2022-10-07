export default function Form() {
	return (
		<form className="contactForm">
			<div className="block">
				<label>First Name </label>
				<input name="firstname" id="firstname" required minLength={3}></input>
			</div>
			<div className="block">
				<label>Last Name </label>
				<input name="lastname" id="lastname" required minLength={4}></input>
			</div>
			<div className="block">
				<label>Email </label>

				<input
					name="email"
					id="email"
					required
					pattern="(?:[a-z0-9!#$% &'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*)@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])"
				></input>
			</div>
			<div className="block">
				<label className="travelCheckbox">Travel inqueries?</label>
				<input
					type="checkbox"
					name="travel"
					placeholder="Travel"
					value="travel"
					required
				></input>
			</div>
			<div className="block">
				<label className="journeyCheckbox">Journey inqueries?</label>
				<input
					type="checkbox"
					name="journey"
					value="journey"
					placeholder="Journey"
				></input>
			</div>
			<div className="block">
				<label>Message</label>
				<input name="message" id="message" required minLength={10}></input>
			</div>
			<button type="submit">Submit</button>
		</form>
	);
}

// function rightCheckbox(){
//     const travel = document.querySelector(".travelCheckbox")
//     const journey = document.querySelector(".journeyCheckbox")

//     if(travel === true){
//         required.disa
//     }
// }
