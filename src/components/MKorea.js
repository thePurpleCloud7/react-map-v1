function MKorea({
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
            viewBox="0 0 800 400"
            width= "2000px"
            style={{ position: "absolute", left: x, top: y }}
        >
            
            <path
                className="shape"
                onClick={onClick}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseExit}
                fill={selectedCountry === country ? "rgba(234,161,81,0.5)" : "rgba(0,0,0,0.25)"}
                stroke={selectedCountry === country ?  "orange": (hoveredCountry === country && selectedCountry !== country) ? "orange": "rgba(234,161,81,0.5)" }
                strokeWidth=".5"
                id="Modern Korea"
                d="M5.26857 1.19548C6.97081 0.528693 6.98492 2.22035 5.62137 2.60666C5.7572 3.28932 5.70427 4.01784 5.12745 4.50293C4.79229 4.78517 4.1167 4.91041 4.10612 5.33024C4.09906 5.61071 4.57533 6.0817 4.73761 6.32689C5.12922 6.91959 5.31796 7.54932 5.26857 8.25139C6.0165 8.55655 5.79424 9.67315 5.79777 10.3682L5.26857 10.1918V10.8974L3.68099 11.0737C3.40405 11.8817 3.31761 11.5888 2.64377 11.6365L1.74062 11.7793L2.44621 9.48617L2.09341 9.66257C2.09341 8.78411 2.02109 8.52833 2.44621 7.72219C1.91525 7.59166 -0.0198302 7.4329 1.03503 6.48741C0.982109 5.92823 0.966233 5.97585 1.38782 5.60542L0.329437 5.25262C0.398232 2.89242 1.81294 4.5929 2.62261 2.07746L4.03379 2.78306V1.90107C4.63883 1.85697 5.12922 1.87284 5.26857 1.19548Z"
                 />

        </svg>
    );
}
export default MKorea;