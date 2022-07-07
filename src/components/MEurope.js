function MEurope({
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
        // <svg width = "231" height= "121" viewBox = "0 0  231 121" fill = "none"  xmlns="http://www.w3.org/2000/svg">

        //     <path onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseExit} className="shape" fill={selectedCountry === country ? "red" : "gray"} stroke={hoveredCountry === country ? "red" : "black"} 
        //     d="M49 0.5L1 120L230 114L136 73L209.5 0.5H49Z"/>
        // </svg>

        <svg

            xmlns="http://www.w3.org/2000/svg"
            width="600px"
            viewBox="380 30 1100 1100"
            style={{  position: "absolute", left: 70, top:-40}}

        >
  <path  onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseExit} className="shape" fill={selectedCountry === country ? "red" : "gray"} stroke={hoveredCountry === country ? "red" : "black"} id="Modern Europe"
   d="m630 271 11-4c11-3 19-1 29 4 4 3 8 4 9 9 1 6-3 7-5 10-3 5-1 11-12 14 1 5-2 16 5 17l3 3-4 9c0 3 4 11 5 14 2 7 2 17 2 24l1 9c1 3 4 6 4 9 0 5-10 17-13 22s-6 11-11 14c7 11 2 10 2 20l2 21c5-1 5 0 9 2l6 2c2 1 6 8 7 10l-1 5c6 1 7 4 9 9-12 1-9 8-6 10s7 0 12 2l12 8 4 5-1 2 10 3 11 5-3 9-9 11c-3-1-4 1-7 3l-10 6 9 1c-2 7-12 14-19 15l-11-11-1-12-4 2 1 4c-10 2-7 8-9 15l-6 14c-3 0-9 0-11 2-3 2-4 8-7 11-4 3-9 3-13 3 2 3 5 7 9 8 0 4 0 5 3 8l-1-2c5 2 14 3 13 11-2 5-10 2-14 2l-6-1 5 5-1-2 3 4c10 1 14 3 14 13-14 0-11-3-21-10l-9-5-7-6-12-30v-12l-11-6-10-5-14-10 17 24 2-1c2 3 3 5 7 5 6 6 9 9 10 18-6-1-7-1-11-6 1 4 4 8 4 11l-5 7c-7 9-11 10-21 7l-7-1c-3-2-12-9-8-13 1-2 5-2 7-2 7 0 6 0 13-2-3-9-5-7-12-11l-13-11 1-6c-7 7 1 13 1 30l-7-1-7-2c-7-5 3-17 4-20l-1-14-10 6-10 5-15 13 16-1-1 9c-2 4-7 3-12 7l-7 6-15 5-8 3h-12c-4 1-15 3-19 2-4 0-4-4-5-7-2 0-6 0-8-2l-1-10-1-10c-1-12-2-8 2-20l4-8c3-4 7-3 12-3 14-2 22-2 36 1l2-12c-1-4-6-9-8-12-5-4-17-4-14-11 1-4 7-2 10-4 4-1 6-5 8-9 6 0 8 1 13-3l-20 3c-4 1-7 4-10 4-9 3-8-8-7-13l1-8c-6 2-12 5-19 5-2 0-6 0-7-2-3-3 2-6-4-12 4-10 1-14 3-18l6-8c4-4 5-8 12-5-2-10 5-16-3-30l23-2c3-5 7-9 12-12l-3-2c3-2 1-4 2-7 2-2 4-3 7-3l-2 9v8l-3 7-3 12 3 1c-2 10 4 14 7 23 2 6 0 9 2 12s5 3 7 7l-8-4c0 6 2 9 8 11 2 1 6 1 7 3 2 3-1 6 0 12l6-10-2 1 1-3 2 1 8-9-1-3 7-1 6-1c11-4 3-13 2-18l1-10 8-6v-4l3 2 2-6h-6l-5 2h-13c-12-5-9-24-9-34l2-18c1-3 5-6 7-7l9-10 12-12c12-16 14-29 29-46l-12 4c-1-3-3-7-1-9 1-2 5-3 7-4l11-6 13-14 5-4c2-3 2-5 4-6 3-2 7 2 9 1 2 0 6-5 7-7l4 1 1-5Zm-268 66c7 1 13 5 19 4 6 0 22-5 27-2l3 4 4-1c2 3 2 4 6 5l4 16 8 12-7-5-9 3 4 8h-4c0-3-1-5-5-5-2 1-8 7-13 8-7 1-11-2-17-5l-8-2-9-4c0-8-4-13-11-17l8-19Zm52 6h-1l1 1v-1Zm1 1h-1l1 1v-1Zm205 36c9-2 15-7 19-15 2-2 4-8 2-10s-9-3-12-3l-4 8-1 11-4 9Zm-204-6h-1l1 1v-1Zm204 6h-1l1 1v-1Zm-1 1h-1l1 1v-1Zm-2 2c-5 5-12 15-13 22v10h4c6 0 10 3 6 9-5 8-12 11-14 20 6-1 8-4 11-3 2 1 1 4 0 6-2 4-7 9-11 11l-1-5c-1 3-4 12-8 13l-8-1 5 10c11-3 14 2 28 2-4-10-1-22 2-32 0-4 1-10 4-13s7-2 13-6l-8-2-3 1-5-12v-11l-2-19ZM440 498h-1l1 1v-1Zm131 65h-1l1 1v-1Zm58 38h-1l1 1v-1Zm-181 21h-1l1 1v-1Zm192 11h-1l1 1v-1Z"/>
</svg>
        
        );
}
export default MEurope;