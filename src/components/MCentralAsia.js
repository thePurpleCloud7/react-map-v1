function MJapan({
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
            viewBox="1 1 150 100"
            width= "110px"
            style={{ position: "absolute", left: x, top: y }}
        >
            
            <path
                className="shape"
                onClick={onClick}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseExit}
                fill={selectedCountry === country ? "rgba(185,228,89,0.5)" : "rgba(0,0,0,0.25)"}
                stroke={selectedCountry === country ?  "green": (hoveredCountry === country && selectedCountry !== country) ? "green": "rgba(185,228,89,0.5)" }
                id="Modern Central Asia"
                strokeWidth="4"
                d="M51.6692 23.7911C51.9825 18.4441 53.4826 19.1775 54.5826 14.4573C54.9427 12.9239 54.936 10.9771 56.5427 10.1904C58.6295 9.17036 63.0831 10.5904 66.3366 8.91701C69.3767 7.35027 70.7701 4.33678 73.7903 3.07672C76.9171 1.76998 84.9108 0.0232403 87.9777 1.66999C89.7311 2.6167 89.911 4.61679 91.8178 5.78351L95.4113 7.13691C97.1581 8.2903 98.9448 12.4772 99.6715 14.4573C100.952 13.6506 103.005 12.4905 104.025 11.4771C105.585 9.93706 106.352 7.33026 108.959 7.31026C111.059 7.29026 112.165 9.63705 112.832 11.3171L114.619 16.4574C117.352 21.9577 117.632 19.6909 119.673 27.1246C121.993 26.4645 131.606 25.6645 133.673 26.4646L141.674 31.2981C143.087 31.9315 144.307 32.3048 145.587 33.2916C148.701 35.6983 148.114 38.2585 144.34 39.1252C145.18 42.0853 145.914 47.4123 141.66 48.0856C139.434 48.439 137.707 46.5455 135.96 47.6723C133.86 49.0257 134.807 52.7192 133.127 54.6926C129.88 58.4995 123.833 55.1526 123.673 63.7931C123.586 68.7666 124.493 72.4335 120.273 76.1137C116.519 79.3938 115.539 78.8338 111.672 80.2606L107.672 82.1473C105.045 83.154 104.025 82.5273 102.338 85.1275L100.338 86.4608C102.785 87.7942 109.005 93.0145 106.499 96.1213C105.092 97.8681 102.832 97.3414 99.6715 100.462H93.6713L91.6712 91.1277C87.9376 98.9948 83.1641 95.8613 79.0039 95.3546C75.9237 94.9813 74.977 96.2547 72.3369 97.2214L63.0031 100.808C61.1896 101.742 59.0962 103.575 57.0628 103.615C55.3294 103.648 53.8159 102.255 52.3225 101.488L49.3091 99.9882C45.8222 97.6481 44.5222 94.5013 39.0019 92.7678C36.2284 91.8945 35.035 93.6012 32.3349 94.2012C29.6881 94.7879 26.948 94.2612 24.3345 93.7945V84.4608C20.3876 83.7674 21.2077 82.4473 21.621 79.1272V75.127L16.3341 79.1272H15.0007C13.2006 73.9802 9.78711 68.5133 9.68044 63.1264C9.60711 59.7862 9.30708 57.7594 13.0006 57.1261L10.9672 53.6059L9.58709 49.7924C7.54699 45.2855 4.9802 43.152 1 40.4586L1.6667 30.4581H4.3335V33.1249H8.3337C8.75372 30.1914 10.0004 26.0512 12.4805 24.1911C15.054 22.2577 23.0078 23.011 25.4612 25.0178C26.5946 25.9512 26.6013 26.5179 27.0013 27.7913L29.6681 26.4712C31.8615 29.4847 32.8482 26.2912 37.6685 26.4712C42.4354 26.6845 52.8959 32.4782 54.336 23.7911H51.6692ZM101.005 83.7941L92.3379 84.4608L101.005 83.7941Z"
                 />

        </svg>
    );
}
export default MJapan;