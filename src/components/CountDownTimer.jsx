
const CountDownTimer = ({ type, time }) => {
	return (
		<div className="flex flex-col gap-2 items-center user-select-none">
			<p className="text-center font-bold text-xl">{type}</p>
			<button className="flex justify-center items-center p-5 text-4xl bg-slate-300 rounded-md text-black">
				{time}:00
			</button>
		</div>
	);
};
export default CountDownTimer;
