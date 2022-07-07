function MChina({
    x,
    y,
    country,
    onClick,
    onMouseEnter,
    onMouseExit,
    selectedCountry,
    hoveredCountry
    // parameters/methods
}) {

    return (
  
        <svg   width="550px"  viewBox="380 30 1100 1100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path  onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseExit} className="shape" fill={selectedCountry === country ? "red" : "gray"} stroke={hoveredCountry === country ? "red" : "black"} id="Modern China"
         d="M244 33c3 0 10 2 12 1 4 0 13-14 14-18 1-5-5-10-1-13l4-2c10-2 9 1 15 3h10l2 9c1 3 3 3 4 7 2 5 0 10 5 15 2 2 4 2 7 3 5 2 11 7 12 13 15-3 5-4 25-4 0 10 0 16-6 24-1 2-3 6-5 6-3 1-6-2-13-3l1 5c7 3 4 13-1 16l-17 10-10 4c-8 4-8 9-12 12-3 3-7 2-16 10h7v10l-8 4c-3 1-8 4-8 7-1 3 2 7 3 9l9 16c2 3 4 6 3 10l-5 12-8 15-25 19-6 2-8 7c-4 2-11 3-16 3l2 15c-8 0-7-1-14-4 1-6 5-6 10-7-4-8-5-8-14-9l-2-5c-2-3-8-5-12-4-3 0-4 3-7 4h-10l-8 3 1 2h-3l-2 3c-3-4-5-8-9-11l-6-5c-2-2-1-4 1-5l-1-3c6-5 1-12 2-19l-13-2c-1-8-7-6-13-4l-11 3-7 3c-3 1-5-2-10-2-4 0-7 3-12 2l-10-5-10-5-12-7-10-6v-9c0-5 0-8-3-12l-10-10c-4-2-9-4-11-8l-1-11-7-2 2-12c3-5 10-4 15-4 5-1 8-2 12-5 2-2 8-7 9-10 1-4-2-11 0-16 3-7 10-6 12-9 2-2 1-10 1-13 6 0 10 0 11 7 9-9 5-7 8-12 3-4 5-2 8-10 7 2 6 4 11 7 3 3 8 3 12 4 0 16-4 13-1 23h11l6 2c4 2 13 13 18 16 4 2 9 1 13 1 13 0 19 6 27 7 4 0 6-2 11-3l16-1 14-10c4-4 3-11 4-14 2-4 7 1 9 3h4c2-3 7-5 10-7 10-7 6-9 20-9v-5l-10-1h-12l3-21Zm24 84-12 8 2 7 14-2c-8-4-6-6-4-13Z" />
      </svg>
        );
}
export default MChina