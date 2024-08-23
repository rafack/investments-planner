import { useState } from "react";

export default function InvestmentsPlannerScreen() {
    const [valInicial, setValInicial] = useState(0)
    const [valAtual, setValAtual] = useState(0)
    const [porcent, setPorcent] = useState(100)

    const [porcentReserva, setPorcentReserva] = useState(0)
    const [porcentFutProx, setPorcentFutProx] = useState(0)
    const [porcentViagens, setPorcentViagens] = useState(0)
    const [porcentFutMed, setPorcentFutMed] = useState(0)
    const [porcentAposentadoria, setPorcentAposentadoria] = useState(0)

    const handleChangeReserva = (event) => {
        if (parseInt(event.target.value) > porcentReserva) {
            setPorcent(porcent - 1)
            setValAtual(valAtual - 1 / 100 * valInicial)
        } else {
            setPorcent(porcent + 1)
            setValAtual(valAtual + 1 / 100 * valInicial)
        }
        setPorcentReserva(event.target.value)
    }

    const handleChangeFutProx = (event) => {
        if (parseInt(event.target.value) > porcentFutProx) {
            setPorcent(porcent - 1)
            setValAtual(valAtual - 1 / 100 * valInicial)
        } else {
            setPorcent(porcent + 1)
            setValAtual(valAtual + 1 / 100 * valInicial)
        }
        setPorcentFutProx(event.target.value)
    }

    const handleChangeViagens = (event) => {
        if (parseInt(event.target.value) > porcentViagens) {
            setPorcent(porcent - 1)
            setValAtual(valAtual - 1 / 100 * valInicial)
        } else {
            setPorcent(porcent + 1)
            setValAtual(valAtual + 1 / 100 * valInicial)
        }
        setPorcentViagens(event.target.value)
    }

        const handleChangeFutMed = (event) => {
        if (parseInt(event.target.value) > porcentFutMed) {
            setPorcent(porcent - 1)
            setValAtual(valAtual - 1 / 100 * valInicial)
        } else {
            setPorcent(porcent + 1)
            setValAtual(valAtual + 1 / 100 * valInicial)
        }
        setPorcentFutMed(event.target.value)
    }

    const handleChangeAposentadoria = (event) => {
        if (parseInt(event.target.value) > porcentAposentadoria) {
            setPorcent(porcent - 1)
            setValAtual(valAtual - 1 / 100 * valInicial)
        } else {
            setPorcent(porcent + 1)
            setValAtual(valAtual + 1 / 100 * valInicial)
        }
        setPorcentAposentadoria(event.target.value)
    }

    const handleChangeValorInicial = (event) => {
        setValInicial(event.target.value)
        setValAtual(event.target.value)
    }

    return (<>
        {/* <h1>Brazilian Airports</h1>
        <button onClick={() => navigate('/iata')}>Sort By IATA</button>
        <ul>
            {airports.map(airport => (
                <li key={airport.iata}>
                    <AirportComponent iata={airport.iata} name={airport.name}/>
                </li>
            ))}
        </ul> */}
        <h1>Investimento Mensal 📈</h1>
        <h2>Valor Inicial</h2>
        <input type="number" id="inicial" min="0" onChange={handleChangeValorInicial}/>

        <h2>Atual</h2>
        <p id="porcent">{porcent}%</p>
        <p id="atual">{valAtual}</p>

        <h2>Qts % vai para cada setor?</h2>
        <h3>Reserva de Emergência 🚨</h3>
        <input type="number" id="porcentReserva" min="0" max="100" onChange={handleChangeReserva}/>
        <p id="val">Valor: {(valInicial * porcentReserva)/ 100}</p>

        <h3>Futuro próximo 🏠</h3>
        <input type="number" id="porcentCasaCur" min="0" max="100" onChange={handleChangeFutProx}/>
        {/* <!-- onchange="valAInvestir('porcentCasaCur', 'val1')"> --> */}
        <p id="val1">Valor: {(valInicial * porcentFutProx)/ 100}</p>

        <h3>Viagens ✈️</h3>
        <input type="number" id="porcentViagens" min="0" max="100" onChange={handleChangeViagens}/>
        {/* <!-- onchange="valAInvestir('porcentViagens', 'val2')"> --> */}
        <p id="val2">Valor: {(valInicial * porcentViagens)/ 100}</p>

        <h3>Futuro médio 🧑‍🧑‍🧒‍🧒</h3>
        <input type="number" id="porcentFuturoMed" min="0" max="100" onChange={handleChangeFutMed}/>
        {/* <!-- onchange="valAInvestir('porcentFuturoMed', 'val3')"> --> */}
        <p id="val3">Valor: {(valInicial * porcentFutMed)/ 100}</p>

        <h3>Aposentadoria</h3>
        <input type="number" id="porcentAposent" min="0" max="100" onChange={handleChangeAposentadoria}/>
        {/* <!-- onchange="valAInvestir('porcentAposent', 'val4')"> --> */}
        <p id="val4">Valor: {(valInicial * porcentAposentadoria)/ 100}</p>
    </>)
}
