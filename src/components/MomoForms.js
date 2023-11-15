import React, { useState,useEffect } from 'react';
import axios from 'axios';

const momoHost = "sandbox.momodeveloper.mtn.com";
const momoTokenUrl = `https://${momoHost}/collection/token`
const momoRequestToPayUrl = `https://${momoHost}/collection/v1_0/requesttopay`

const MomoForms =>{
    const [MomoAmount, setMomoAmount] = useState();
    const [momoNumber, setMomoNumber] = useState('');
    const [MomoResponse, setMomoResponse] = useState(null);
    const [momoToken, setMomoToken] = useState(null);

    const getMomo
}

export default MomoForms;