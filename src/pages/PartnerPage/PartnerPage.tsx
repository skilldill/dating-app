import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { IonSpinner } from "@ionic/react";

import "./style.scss";
import { Partner } from "../../shared/models";
import { ModalBottom } from "../../shared/components";

// Mock fetch чтобы продемонстрировать загрузку данных
const mockFetchPartner = (id: any, partners: Partner[]): Promise<Partner> => {
    return new Promise((resolve) => {
        const foundPartner = partners.find((partner) => partner.id === id);
        setTimeout(() => resolve(foundPartner), 2000);
    })
}

export const PartnerPage = () => {
    const [partner, setPartner] = useState<Partner | null>(null);
    const { id } = useParams();
    const partnersLiked = useSelector((state: any) => state.partners.partnersLiked);
    const [showFormDate, setShowFormDate] = useState(false);

    useEffect(() => {
        const fetchPartner = async () => {
            const fetchedPartner = await mockFetchPartner(id, partnersLiked);
            setPartner(fetchedPartner);
        }
        fetchPartner();
    }, []);

    const handleOpenFormDate = () => {
        setShowFormDate(true)
    }

    return (
        <div className="partner-page">
            {partner ? (
                <>
                    <div className="avatar">
                        <img src={partner.avatar} alt={partner.name} />
                    </div>
                    <div className="description">
                        <h3>{partner.name}</h3>
                    </div>
                    <div className="controls">
                        <button className="btn btn-primary">Написать</button>
                        <button 
                            className="btn btn-primary"
                            onClick={handleOpenFormDate}
                        >Пригласить</button>
                    </div>
                </>
            ) : (
                <div className="partner-page-loading">
                    <IonSpinner />
                </div>
            )}
            {
                showFormDate && (
                <ModalBottom onClose={() => setShowFormDate(false)}>
                    <form>
                        <input type="date" placeholder="Дата" />
                        <input type="time" placeholder="Время" />
                    </form>
                </ModalBottom>
            )}
        </div>
    )
}