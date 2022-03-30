import Proof from '../models/Proof.js';
import ProofTypes from '../models/ProofTypes.js';
import UnitMesuare from '../models/UnitMesuare.js';
import Player from '../models/Player.js';
import Average from '../statistics/average.js';
import Best from '../statistics/best.js'
import Worst from '../statistics/worst.js'
import Total from '../statistics/total.js'

let agility = []
let speed = []
let resistance = []
let catching = []
let strength = []
let jump = []
let power = []
let other = []

export const getStatisticsByCategory = async (req, res, next) => {
    const prueba = await populateProof(await Proof.find())
    await separateCategories(prueba)


    const aux = [agility, speed, resistance, catching, strength, jump, power, other]
    let aux2 = ["agility", "speed", "resistance", "catching", "strength", "jump", "power", "other"]

    let response = ''
    // for (let i = 0; i < aux.length; i++) {
    //         response += `"${aux2[i]}":{"averageAll": ${Average.getAverageAll(aux[i])},"averageMale" : ${Average.getAverageMale(aux[i])},"averageFemale" : ${Average.getAverageFemale(aux[i])},"best" : ${Best.getBestAll(aux[i])},"bestMale" : ${Best.getBestMale(aux[i])},"bestFemale" : ${Best.getBestFemale(aux[i])},"worst" : ${Worst.getWorstAll(aux[i])},"worstMale" : ${Worst.getWorstMale(aux[i])},"worstFemale" : ${Worst.getWorstFemale(aux[i])},"quantity": ${Total.getTotalAll(aux[i])},"quantityMale": ${Total.getTotalMale(aux[i])},"quantityFemale": ${Total.getTotalFemale(aux[i])},"underAverage": ${Average.getUnderAverageAll(aux[i])},"underAverageMale": ${Average.getUnderAverageMale(aux[i])},"underAverageFemale": ${Average.getUnderAverageFemale(aux[i])},"overAverage": ${Average.getOverAverageAll(aux[i])},"overAverageMale": ${Average.getOverAverageMale(aux[i])},"overAverageFemale": ${Average.getOverAverageFemale(aux[i])}},`
    // }
    let i = 0
    aux.forEach((e) => {
        response += `"${aux2[i]}":{"averageAll": ${Average.getAverageAll(e)},"averageMale" : ${Average.getAverageMale(e)},"averageFemale" : ${Average.getAverageFemale(e)},"best" : ${Best.getBestAll(e)},"bestMale" : ${Best.getBestMale(e)},"bestFemale" : ${Best.getBestFemale(e)},"worst" : ${Worst.getWorstAll(e)},"worstMale" : ${Worst.getWorstMale(e)},"worstFemale" : ${Worst.getWorstFemale(e)},"quantity": ${Total.getTotalAll(e)},"quantityMale": ${Total.getTotalMale(e)},"quantityFemale": ${Total.getTotalFemale(e)},"underAverage": ${Average.getUnderAverageAll(e)},"underAverageMale": ${Average.getUnderAverageMale(e)},"underAverageFemale": ${Average.getUnderAverageFemale(e)},"overAverage": ${Average.getOverAverageAll(e)},"overAverageMale": ${Average.getOverAverageMale(e)},"overAverageFemale": ${Average.getOverAverageFemale(e)}},`
        i++
    })
    response = response.slice(1, -1)
    return res.json(JSON.parse(`{"${response}}`))
}

export const getStatisticsByProof = async (req, res, next) => {
    const typeProof = req.params.typeProof
    const prueba = await populateProof(await Proof.find())
    await separateCategories(prueba)

    const aux = [agility, speed, resistance, catching, strength, jump, power, other]
    let aux2 = ["agility", "speed", "resistance", "catching", "strength", "jump", "power", "other"]

    const i = aux2.findIndex(e => e == typeProof)

    let response = ''
    if (aux[i].length > 0) {
        aux[i].forEach(e => {
            response += `"${e.name}":{"averageProof": ${Average.getAverageProof(e)},"averageMale" : ${Average.getAverageProofMale(e)},"averageFemale" : ${Average.getAverageProofFemale(e)},"best" : ${Best.getBestProof(e)},"bestMale" : ${Best.getBestProofMale(e)},"bestFemale" : ${Best.getBestProofFemale(e)},"worst" : ${Worst.getWorstProof(e)},"worstMale" : ${Worst.getWorstProofMale(e)},"worstFemale" : ${Worst.getWorstProofFemale(e)},"quantity": ${Total.getTotalProof(e)},"quantityMale": ${Total.getTotalProofMale(e)},"quantityFemale": ${Total.getTotalProofFemale(e)},"underAverage": ${Average.getUnderAverageProof(e)},"underAverageMale": ${Average.getUnderAverageProofMale(e)},"underAverageFemale": ${Average.getUnderAverageProofFemale(e)},"overAverage": ${Average.getOverAverageProof(e)},"overAverageMale": ${Average.getOverAverageProofMale(e)},"overAverageFemale": ${Average.getOverAverageProofFemale(e)}},`
        })

        response = response.slice(1, -1)
        return res.json(JSON.parse(`{"${response}}`))
    } else {
        return res.json({ message: "There is not proof in this category" })
    }


}

const separateCategories = async (prueba) => {
    agility = []
    speed = []
    resistance = []
    catching = []
    strength = []
    jump = []
    power = []
    other = []
    return await prueba.forEach(e => {
        switch (e.proofType.name) {
            case 'agility':
                agility.push(e)
                break;
            case 'speed':
                speed.push(e)
                break;
            case 'resistance':
                resistance.push(e)
                break;
            case 'catching':
                catching.push(e)
                break;
            case 'strength':
                strength.push(e)
                break;
            case 'jump':
                jump.push(e)
                break;
            case 'power':
                power.push(e)
                break;
            case 'other':
                other.push(e)
                break;
            default:
                break;
        }
    })
}


const populateProof = async (proof) => {
    const unitMeasure = await UnitMesuare.populate(proof, { path: 'unitMeasure' })
    const proofTypes = await ProofTypes.populate(unitMeasure, { path: 'proofType' })
    const player = await Player.populate(proofTypes, { path: 'listPlayers.playerId' })
    return player ? player : 'Proof doesnt exist'
}