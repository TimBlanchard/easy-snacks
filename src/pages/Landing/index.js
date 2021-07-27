import React, {useEffect, useState} from 'react'
import Error from '../../components/organisms/Error'
import Summary from '../../components/organisms/Summary'
import ArrayData from '../../components/organisms/ArrayData';
import Button from "../../components/atoms/Button";
import {getSchoolsFromApiAsync, randomNumberInterval} from "../../services/network";

export default function Landing() {
    const [listSchool, setListSchool] = useState([]);
    const [dataTable, setDataTable] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getSchoolsFromApiAsync().then(data => {
            setListSchool(data);
        });
    }, []);

    const getDataArray = () => {
        if(listSchool) {
            let arrayData = [];
            listSchool.forEach(
                el => {
                    const tempData = {
                        ecole: <><span className="title">{el.name}</span><br/>{el.address}<br/>{el.zipCode}, {el.city}</>,
                        distrib: <><span className="bold">{randomNumberInterval(0, 3)}</span><br/>sur 3</>,
                        vente: <><span className="bold">{randomNumberInterval(250, 350)}</span></>,
                        revenu: <><span className="bold">{randomNumberInterval(350, 500)}€</span> {randomNumberInterval(350, 500) < 420 ? <div className="arrowDown" /> : <div className="arrowUp" />}</>,
                        somme: <><span className="bold">{randomNumberInterval(150, 300)}€</span><br/>{randomNumberInterval(30, 70)}% plein</>,
                        statut: el.alerts.length > 0 ? <><Button className="btn--error" icon="/assets/images/icons/warning-white.svg" text={el.alerts.length+' alertes'} /></> : <><Button className="btn" text="OK" /></>,
                        router: "/ecole/"+el.id
                    }
                    arrayData.push(tempData)
                }
            )
            return arrayData;
        }
    }

    useEffect(() => {
        setDataTable(getDataArray());
    }, [listSchool]);

    useEffect(() => {
        if(dataTable.length > 1) {
            setLoading(true);
        }
    }, [dataTable]);

    const arraySummary = [
        {
            id: 1,
            title: 'Revenus',
            period: '/1 jour',
            values: {
                number: randomNumberInterval(1500, 4000),
                symbole: '€',
                position: 'suffix'
            },
            type: 'home'
        },
        {
            id: 2,
            title: 'Revenus',
            period: '/1 semaine',
            values: {
                number: randomNumberInterval(8000, 15000),
                symbole: '€',
                position: 'suffix'
            },
            type: 'search'
        },
        {
            id: 3,
            title: 'Revenus',
            period: '/1 mois',
            values: {
                number: randomNumberInterval(37000, 55000),
                symbole: '€',
                position: 'suffix'
            },
            type: 'activity'
        },
        {
            id: 4,
            title: 'Revenus',
            period: '/1 an',
            values: {
                number: randomNumberInterval(321000, 478000),
                symbole: '€',
                position: 'suffix'
            },
            type: 'search'
        }
    ]

    const arrayColumns = [
        {
            Header: 'École',
            accessor: 'ecole', // accessor is the "key" in the data
        },
        {
            Header: 'Distrib. fonctionnels',
            accessor: 'distrib',
        },
        {
            Header: 'Ventes /7 jours',
            accessor: 'vente',
        },
        {
            Header: 'Revenus /7 jours',
            accessor: 'revenu',
        },
        {
            Header: 'Somme présente',
            accessor: 'somme',
        },
        {
            Header: 'Statut',
            accessor: 'statut',
        },
    ]

    return (
        <div className="main-app landing">
            <Error title="3 de vos distributeurs sont en pannes." description="Une action immédiate de votre part est requise." button="Résoudre les problèmes" />
            <Summary array={arraySummary} />
            {loading &&
                <ArrayData listData={dataTable} listColumns={arrayColumns} />
            }
        </div>
    )
}
