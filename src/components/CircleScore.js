import React from 'react'

function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
    var angleInRadians = (angleInDegrees-90) * Math.PI / 180.0;

    return {
        x: centerX + (radius * Math.cos(angleInRadians)),
        y: centerY + (radius * Math.sin(angleInRadians))
    };
}
  
function describeArc(x, y, radius, startAngle, endAngle){

    var start = polarToCartesian(x, y, radius, endAngle);
    var end = polarToCartesian(x, y, radius, startAngle);

    var largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

    var d = [
        "M", start.x, start.y, 
        "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y
    ].join(" ");

    return d;       
}

export default function CircleScore({score}) {
    var degree = (score*360)/100
    return (
        <svg xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="47" fill="none" stroke="#9a0941" strokeWidth="6px" opacity="0.5"/>
            <circle cx="50" cy="50" r="38" fill="#c1c1c1" />
            <path d={describeArc(50, 50, 47, 0, degree)} fill="none" stroke="#9a0941" strokeWidth="6px"/>
            <text textAnchor="middle" x="50" y="62" fontSize="35" >{score}</text>
        </svg>
    )
}
