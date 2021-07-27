import React, {useEffect, useState} from 'react'
import Summary from '../../components/organisms/Summary'
import SchoolRevenue from "../../components/organisms/SchoolRevenue";
import AlertHistoric from "../../components/organisms/AlertHistoric";
import './index.scss'
import ArrayData from "../../components/organisms/ArrayData";
import {Link} from "wouter";
import Button from "../../components/atoms/Button";
import {getSchoolDetails, getSchoolMachines, randomNumberInterval} from "../../services/network";

export default function SingleSchool({id}) {
    const [detailSchool, setDetailSchool] = useState([]);
    const [detailMachines, setDetailMachines] = useState([]);
    const [dataTable, setDataTable] = useState([]);
    const [loading, setLoading] = useState(false);
    const [loadingSummary, setLoadingSummary] = useState(false);
    const [array, setArray] = useState([]);

    useEffect(() => {
        getSchoolMachines(id).then(data => {
            setDetailMachines(data);
        });
        getSchoolDetails(id).then(data => {
            setDetailSchool(data);
        });
    }, []);

    const getDataArray = () => {
        if(detailMachines) {
            let arrayData = [];
            detailMachines.forEach(
                el => {
                    const tempData = {
                        distrib: el.id,
                        temp: <>{el.temperatures[el.temperatures.length - 1].temperature}°C</>,
                        vente: <>
                            <svg width="52" height="16" viewBox="0 0 52 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d={"M1 "+randomNumberInterval(1,12)+".07229L6.39122 "+randomNumberInterval(1,12)+".31325L15.6469 "+randomNumberInterval(1,12)+".07229L29.9599 "+randomNumberInterval(1,12)+"L35.7328 "+randomNumberInterval(1,12)+"L51 2"} stroke="#3E2A70"
                                      stroke-width="2"/>
                            </svg>
                            {randomNumberInterval(350, 500)} {randomNumberInterval(350, 500) < 420 ? <div className="arrowDown" /> : <div className="arrowUp" />}</>,
                        localistation: <>{randomNumberInterval(0, 30) < 11 ? "Rez-de-chaussée" : "Étage " + randomNumberInterval(1, 3)}</>,
                        etat: <><div className="status status--green"/>OK</>,
                        router: "/distributeur/"+el.id
                    }
                    arrayData.push(tempData)
                }
            )
            return arrayData;
        }
    }

    useEffect(() => {
        setDataTable(getDataArray());
    }, [detailMachines]);

    useEffect(() => {
        if(dataTable.length > 1) {
            setLoading(true);
        }
    }, [dataTable]);

    useEffect(() => {
        if(detailSchool.length > 0) {
            setLoadingSummary(true);
            setArray([
                {
                    id: 1,
                    title: 'Nbr. de distrib.',
                    values: {
                        number: detailSchool[0].vendingMachines.length
                    },
                    type: 'distributeur'
                },
                {
                    id: 2,
                    title: 'Le + utilisé',
                    period: '/1 semaine',
                    values: {
                        number: detailSchool[0].vendingMachines[randomNumberInterval(0, 2)].id,
                        symbole: '#',
                        position: 'prefix'
                    },
                    type: 'users'
                },
                {
                    id: 3,
                    title: 'Le + rentable',
                    period: '/1 semaine',
                    values: {
                        number: detailSchool[0].vendingMachines[randomNumberInterval(0, 2)].id,
                        symbole: '#',
                        position: 'prefix',
                        detail: randomNumberInterval(350, 500)+"€"
                    },
                    type: 'dollar'
                }
            ])
        }
    }, [detailSchool]);



    const arrayColumns = [
        {
            Header: 'Numéro distrib.',
            accessor: 'distrib',
        },
        {
            Header: 'Température',
            accessor: 'temp',
        },
        {
            Header: 'Ventes /7j',
            accessor: 'vente',
        },
        {
            Header: 'Localisation',
            accessor: 'localistation',
        },
        {
            Header: 'État',
            accessor: 'etat',
        },
    ]


    return (
        <div className="main-app single-school">
            <div className="single-school__header">
                <Link href={"/"}>
                    <div className="single-school__header__back">
                        <img className="single-school__header__back__icon" src="/assets/images/icons/back.svg"/>
                        Retour
                    </div>
                </Link>

                <div className="single-school__header__title">
                    <img className="single-school__header__title__icon" src="/assets/images/icons/school.svg"/>
                    {loadingSummary &&
                        <>
                            <h1>{detailSchool[0].name}</h1>
                            <p>{detailSchool[0].address}, {detailSchool[0].zipCode} {detailSchool[0].city}</p>
                        </>
                    }
                </div>

                <Button icon="/assets/images/icons/map.svg" className="btn--primary--reverse" text='Voir la carte'/>
            </div>
            <div className="single-school__content">
                <div className="principal">
                    {loadingSummary &&
                    <Summary array={array}/>
                    }
                    {loading &&
                    <ArrayData listData={dataTable} listColumns={arrayColumns} />
                    }
                </div>
                <aside>
                    <SchoolRevenue />
                    {loadingSummary &&
                    <AlertHistoric alerts={detailSchool[0].alerts} />
                    }
                </aside>
            </div>
        </div>
    )
}
