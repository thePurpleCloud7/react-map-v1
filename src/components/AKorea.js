function AKorea({
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
            viewBox="0 1 500 300"
            width= "310px"
            style={{ position: "absolute", left: x, top: y }}
        >
            
            <path
                className="shape"
                onClick={onClick}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseExit}
                fill={selectedCountry === country ? "rgba(234,161,81,0.5)" : "rgba(0,0,0,0.25)"}
                stroke={selectedCountry === country ?  "orange": (hoveredCountry === country && selectedCountry !== country) ? "orange": "rgba(234,161,81,0.5)" }
                strokeWidth="4"
                id="Ancient Korea"
                d="M117.871 15.0129C118.784 11.8661 124.151 3.85233 127.238 2.43892C130.665 0.872169 136.125 1.00551 139.872 1.01218C141.299 1.01218 143.652 0.852166 144.846 1.69221C145.752 2.33891 147.186 5.2524 147.786 6.34579C150.913 12.0394 151.873 17.2864 151.873 23.68L150.539 23.0133C150.433 27.1269 150.333 28.647 145.872 29.0136V33.6806L152.826 28.8203L161.207 28.3469C161.227 34.1539 161.68 32.1271 162.453 36.3474V43.0144C162.527 50.6281 161.12 48.5947 157.893 54.4616C156.366 57.2285 155.24 60.4886 152.959 62.7688L146.326 67.3823C145.332 68.5224 142.699 75.3361 139.619 76.6428C138.372 77.1762 135.332 76.9962 133.872 77.0162C128.598 77.1095 124.331 79.9897 119.871 82.3898C117.444 83.6899 114.391 85.2099 113.191 87.8701C111.891 90.6769 114.211 90.6969 113.191 95.0171C116.071 97.3972 116.018 102.277 118.058 105.384C120.924 109.745 124.965 109.438 129.012 111.225C131.145 112.165 132.218 113.931 134.538 114.351C135.892 117.745 137.819 119.978 138.872 123.679C139.505 126.892 138.059 127.072 138.872 129.272L145.419 138.553C147.612 142.14 147.793 144.78 151.873 147.02L158.533 161.407L161.293 173.021L163.207 182.355C165.007 183.848 167.127 188.769 168.16 191.029C170.567 196.336 172.994 198.263 173.874 204.356L178.601 205.516C181.628 206.103 184.128 205.663 186.995 207.55C189.528 209.223 190.541 211.303 192.142 213.697C193.002 214.99 194.055 216.243 194.642 217.69C195.562 219.984 196.628 230.631 195.215 232.571C194.342 233.764 191.461 234.738 190.061 235.498C187.521 236.871 187.608 237.471 184.541 237.025L172.54 245.692C172.354 250.572 169.42 251.599 173.874 253.025V255.692L161.873 261.392C159.96 262.013 155.86 263.099 153.933 262.939C151.159 262.706 149.826 260.912 145.206 262.099C140.832 263.219 135.392 266.093 131.205 267.813L113.204 273.4C109.704 274.287 106.117 274.34 102.537 274.36C97.7366 274.393 93.0963 276.053 88.4227 276.993H83.2292C77.1088 277.853 77.0888 281.58 70.5351 281.694C68.735 281.72 63.6348 281.927 62.2414 281.147C60.688 280.273 60.4546 278.173 59.7946 276.64C56.9878 270.126 57.1611 272.706 57.2011 265.026C57.2211 261.032 58.9612 255.319 60.568 251.632C61.2413 250.079 62.7147 247.818 62.9614 246.365C63.2948 244.365 62.2013 243.298 62.2747 241.578C62.3547 239.851 63.5414 238.305 63.8347 235.024V219.024C58.5011 217.71 60.1813 215.57 57.9678 212.657L55.1076 209.603C51.5141 204.77 48.274 195.089 55.1076 191.689C53.9676 186.395 59.3479 179.042 60.5346 173.688L61.868 174.355C61.968 172.841 62.7414 169.514 62.3614 168.441C61.848 166.994 59.7546 165.774 58.5345 164.881C56.6677 163.507 49.334 157.794 47.8606 157.36C45.1671 156.56 41.947 157.58 39.2268 156.4C35.1733 154.64 33.4332 151.673 30.6464 148.907C25.9661 144.266 22.9593 145.133 21.1992 137.019C24.7927 136.113 25.6527 134.893 28.3396 132.526L31.4864 130.046C34.2866 127.439 36.8467 122.792 37.2 119.018L38.5334 119.685L40.7336 112.518L44.1404 108.871L44.5338 102.351C39.6202 102.411 37.1334 104.084 33.9265 103.598C30.6197 103.084 30.753 100.444 27.7462 99.3573L24.746 98.6973L21.6526 96.9039L13.7521 94.6638L9.19857 94.1437C6.89845 93.5637 2.48485 89.6768 1.57814 87.4967C-0.041947 83.5832 2.21818 79.503 2.59154 75.6761V71.1292C3.03156 69.1758 3.63158 69.0358 3.83159 66.3423C3.9916 64.0888 3.83163 59.1886 5.20504 57.3885C5.98508 56.3617 8.01185 55.7084 9.19857 55.1417C16.5256 51.6282 18.4657 52.9682 25.8661 54.2616H31.8664C34.4266 54.3616 35.0666 54.155 37.2 55.6817C39.4068 54.055 40.5536 54.355 43.2004 54.3483H61.868C63.2081 54.3483 65.1548 54.415 66.4149 54.0083L77.3155 47.788C80.2957 46.0812 82.9424 45.6545 85.8693 43.5144C92.6896 38.5141 97.7833 31.5338 103.49 25.3668C106.324 22.3 107.404 24.1534 111.204 19.0131L113.204 19.6798C114.211 17.3797 115.231 15.3796 117.871 15.0129Z"
                />

        </svg>
    );
}
export default AKorea;