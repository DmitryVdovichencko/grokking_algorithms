// Simple version of binarySearch
type searchResultType = number | null;
const binarySearch = (sortedListOfNumbers:Array<number>, item:number):searchResultType => {
	let lowIndex:number = 0, highIndex:number = sortedListOfNumbers.length-1;
	while (lowIndex <= highIndex) {
		const midIndex:number = Math.floor((lowIndex + highIndex)/2), guess:number = sortedListOfNumbers[midIndex];
		if ( guess === item ){
			return midIndex;
		}
		else if (guess > item){
			highIndex = midIndex - 1;
		}
		else {
			lowIndex = midIndex +1;
		}
	}
	return null;
}

export default binarySearch;