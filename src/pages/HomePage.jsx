import React, { useState } from 'react';
import { useExampleQuery } from '../hooks/useExampleQuery';

const ModalContent = () => {
    const { data, isLoading, isError } = useExampleQuery();

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error fetching data</div>;

    return (
        <div>
            <h2>Modal Title</h2>
            <ul>
                {data.animals.map(animal => (
                    <li key={animal.id}>{animal.name}</li>
                ))}
            </ul>
        </div>
    );
};

const HomePage = () => {
    const { data, isLoading, isError } = useExampleQuery();
    const [isModalOpen, setModalOpen] = useState(false);

    const handleOpenModal = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error fetching data</div>;

    return (
        <div>
            <h1>Animal List</h1>
            <button onClick={handleOpenModal}>Open Modal</button>
            <ul>
                {data.animals.map(animal => (
                    <li key={animal.id}>{animal.name}</li>
                ))}
            </ul>
            {isModalOpen && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <dialog open style={{
                        backgroundColor: 'white',
                        padding: '20px',
                        borderRadius: '8px',
                        maxHeight: '800px',
                        overflowY: 'auto'
                    }}>
                        <ModalContent />
                        <button onClick={handleCloseModal}>Close</button>
                    </dialog>
                </div>
            )}
        </div>
    );
};

export default HomePage;