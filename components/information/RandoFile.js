import React from "react";

export default function RandoFile() {

    const sectores = [
        { id: "conservacion", color: "#4CAF50", label: "Conservación" },
        { id: "economia", color: "#FFC107", label: "Economía" },
        { id: "poblacion", color: "#03A9F4", label: "Población" },
        { id: "servicios", color: "#F44336", label: "Servicios" },
        { id: "equipamiento", color: "#E91E63", label: "Equipamiento" },
        { id: "movilidad", color: "#FF9800", label: "Movilidad" },
        { id: "estructura", color: "#9C27B0", label: "Estructura" },
    ];

    return (
        <div className="flex justify-center items-center w-full">
            <svg viewBox="0 0 400 400" width="400" height="400">
                <circle cx="200" cy="200" r="60" fill="#e0f2f1" />
                <text x="200" y="205" textAnchor="middle" fontSize="14" fontWeight="bold">
                    PERSONAS
                </text>

                {sectores.map((s, i) => {
                    const startAngle = (i * 360) / sectores.length;
                    const endAngle = ((i + 1) * 360) / sectores.length;
                    const largeArc = endAngle - startAngle > 180 ? 1 : 0;
                    const x1 = 200 + 140 * Math.cos((Math.PI * startAngle) / 180);
                    const y1 = 200 + 140 * Math.sin((Math.PI * startAngle) / 180);
                    const x2 = 200 + 140 * Math.cos((Math.PI * endAngle) / 180);
                    const y2 = 200 + 140 * Math.sin((Math.PI * endAngle) / 180);

                    const pathData = `
            M200,200
            L${x1},${y1}
            A140,140 0 ${largeArc} 1 ${x2},${y2}
            Z
          `;

                    const textAngle = (startAngle + endAngle) / 2;
                    const tx = 200 + 100 * Math.cos((Math.PI * textAngle) / 180);
                    const ty = 200 + 100 * Math.sin((Math.PI * textAngle) / 180);

                    return (
                        <g
                            key={s.id}
                            onClick={() => handleClick(s.id)}
                            onMouseEnter={(e) => (e.target.style.opacity = 0.8)}
                            onMouseLeave={(e) => (e.target.style.opacity = 1)}
                            style={{ cursor: "pointer" }}
                        >
                            <path d={pathData} fill={s.color} stroke="white" strokeWidth="2" />
                            <text
                                x={tx}
                                y={ty}
                                textAnchor="middle"
                                fontSize="12"
                                fill="white"
                                fontWeight="bold"
                            >
                                {s.label}
                            </text>
                        </g>
                    );
                })}
            </svg>
        </div>
    );
}
