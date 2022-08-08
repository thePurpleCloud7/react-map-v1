function AIndia({
    x,
    y,
    country,
    onClick,
    onMouseEnter,
    onMouseExit,
    selectedCountry,
    hoveredCountry,
    // parameters/methods
}) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-150 4 400 400"
            width= "163px"
            style={{ position: "absolute", left: x, top: y }}
        >
            
            <path
                className="shape"
                onClick={onClick}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseExit}
                fill={selectedCountry === country ?  "rgba(241,224,184,0.5)": "rgba(0,0,0,0.25)"}
                stroke={selectedCountry === country ?  "yellow": (hoveredCountry === country && selectedCountry !== country) ?  "yellow" :  "rgba(241,224,184,0.5)" }
                id="Ancient India"
                strokeWidth="8"
                d="M4.20429 116.156C2.48696 108.945 0.68431 104.913 1.04697 96.9557C1.44164 88.2517 5.50563 86.4704 8.14029 79.7077C9.65496 75.8144 9.52695 72.2411 9.53762 68.1558C9.55895 56.1024 8.86563 47.9744 12.4496 36.1558C14.487 29.4251 17.8363 28.3371 22.0603 23.3558C25.7296 19.0251 26.7749 16.0812 32.1189 12.7958C42.7536 6.26783 52.1509 7.35582 63.9376 7.35582H109.804C116.716 7.23849 123.308 4.46516 130.071 3.15316H137.495L145.1 1.01983H161.004C168.513 0.966492 167.948 0.753158 174.103 4.81715C182.273 10.1931 185.484 5.96916 185.537 20.1558L204.737 23.4198H216.471L229.271 25.4891H252.737V52.1558C252.684 62.9504 250.625 59.2384 250.604 71.3557V94.8224C250.583 104.049 249.953 100.689 248.737 107.622L247.287 121.393C246.689 126.14 241.804 140.113 239.916 144.956C237.761 150.513 227.617 169.873 224.151 174.524L219.233 180.198L212.268 190.481C205.068 201.169 198.359 210.353 198.337 223.889V239.889C198.476 249.734 201.153 249.35 202.529 255.889V261.18L204.033 266.684C204.161 268.742 202.796 269.99 202.604 276.156C193.185 278.918 193.164 283.846 189.111 290.641L178.967 303.163C177.601 306.171 178.071 315.131 178.071 318.822H174.871L172.876 328.422L172.247 342.289C171.297 346.438 168.652 349.83 168.759 352.955C168.897 356.891 171.799 357.499 173.772 362.15C175.287 365.681 174.881 370.449 174.871 374.289C174.871 376.923 175.084 380.337 173.783 382.683C170.273 389.041 152.823 392.753 146.071 395.334C139.393 397.883 140.236 400.849 133.271 402.022C131.447 408.134 127.788 409.009 122.604 412.177C113.217 417.905 114.583 415.302 107.682 417.478C104.311 418.545 103.116 420.283 100.023 421.083H81.0042C73.6122 421.35 68.6629 425.798 64.0549 421.083C61.1642 418.097 59.7029 413.446 57.5482 409.979L52.7696 402.993L49.8362 396.785C44.3856 386.63 42.3056 384.571 43.9803 372.155C45.4309 361.371 51.1056 362.278 51.1376 347.622V301.755L52.4602 284.87L54.3269 279.259V273.137C55.3402 268.881 56.3536 270.3 56.4709 263.356V254.822C56.5242 245.628 58.3376 247.473 59.5749 239.889V230.385L62.2629 216.721C66.3802 199.516 71.3615 192.316 78.1989 176.945C80.3429 172.102 83.4682 163.004 81.2815 157.873C80.0122 154.876 77.0042 153.596 74.1562 152.497L51.1376 146.534C43.2762 143.793 41.2496 138.62 35.7456 133.66C28.2576 126.908 14.0176 118.342 4.20429 116.156Z" 
            />
        </svg>
    );
}
export default AIndia;