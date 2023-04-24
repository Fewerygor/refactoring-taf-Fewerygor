// Implemente aqui as funções

function heightValid(gender, height) {
    if (gender == "male" && height >= 1.70) {
        return true;
    } else if (gender == "female" && height >= 1.60) {
        return true;
    }
        return false;
}


function barTest(gender, barReps, barSeconds) {
    if (gender == "male" && (barReps >=6 || barSeconds >=15)) {
        return true;
    } else if (gender == "female" && (barReps >= 5 || barSeconds >= 12)){
        return true;
    }
        return false;
}


function absTest(abs) {
    if (abs >= 41) {
        return true;
    }
        return false;
}


function runTest(gender, runDistance, runTime) {
    if (gender == "male" && ((runDistance >= 3000 && runTime <= 720) || (runDistance >= 5000 && runTime <= 1200))) { 
        return true;
    } else if (gender == "female" && ((runDistance >= 4000 && runTime <= 900) || (runDistance >= 6000 && runTime <= 1320))) {
        return true;
    }
        return false;
}


function swimTest(swimDistance, swimTime, swimDive) {
    if ((swimDistance >= 100 && swimTime <= 60) || swimDive <= 30) {
        return true;
    } 
        return false;
}

function showMessage(message) {
    let upperCaseMessage = message.toString();
    return upperCaseMessage.toUpperCase();
}

function areCandidateResultsValid(gender, height, barReps, barSeconds, abs, runDistance, runTime, swimDistance, swimTime, swimDive) {
    if (heightValid(gender, height) && barTest(gender, barReps, barSeconds) && absTest(abs) && runTest(gender, runDistance, runTime) && swimTest(swimDistance, swimTime, swimDive)) {
        return true;
    }
        return false; 
}

// Chamando a função com os parametros recebidos via script de teste
// e atribuindo a variavel que devera ser mostrada no console
const areCandidateValid = areCandidateResultsValid(
    process.argv[2], // Genero
    process.argv[3], // Altura
    process.argv[4], // Repetições de barra
    process.argv[5], // Tempo de barra em segundos
    process.argv[6], // Abdominais
    process.argv[7], // Distancia percorrida em metros
    process.argv[8], // Tempo total da corrida em segundos
    process.argv[9], // Distancia do nado em metros
    process.argv[10], // Tempo total de nado em segundos
    process.argv[11], // Tempo total de mergulho em segundos
);

// Chame aqui a função que mostra o resultado no console


console.log(showMessage(areCandidateValid));