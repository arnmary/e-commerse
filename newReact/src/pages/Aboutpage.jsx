import React from 'react'

export default function Aboutpage() {
  return (
    <>
       <section id="about" className="mb-5">
            <div className="row align-items-center">
                <div className="col-md-6">
                    <h2>Хто ми?</h2>
                    <p>Petsmania — це зоомагазин, який допомагає вам піклуватися про ваших улюбленців. Ми пропонуємо широкий асортимент якісних товарів для тварин: від кормів до аксесуарів.</p>
                    <p>Наша мета — забезпечити вашого улюбленця всім необхідним для щасливого та здорового життя.</p>
                </div>
                <div className="col-md-6">
                    <img src="/womanDog.jpg" alt="Woman with dog" className='img-fluid rounded'/>
            </div>
            </div>
        </section>

        <section id="mission" className="bg-light py-5 px-3 rounded">
            <h2 className="text-center inter-500  mb-4">Наша місія</h2>
            <p className="text-center  inter-500">Надихати власників тварин дбати про своїх улюбленців, надаючи якісні товари та послуги.</p>
        </section>

        <section id="advantages" className="my-5">
            <h2 className="text-center mb-4">Чому обирають нас?</h2>
            <div className="row text-center">
                <div className="col-md-4">
                    <i className="bi bi-star-fill text-warning fs-1"></i>
                    <h4 className="mt-2">Висока якість</h4>
                    <p>Ми працюємо лише з перевіреними виробниками.</p>
                </div>
                <div className="col-md-4">
                    <i className="bi bi-truck text-success fs-1"></i>
                    <h4 className="mt-2">Швидка доставка</h4>
                    <p>Доставляємо ваші замовлення вчасно.</p>
                </div>
                <div className="col-md-4">
                    <i className="bi bi-heart-fill text-danger fs-1"></i>
                    <h4 className="mt-2">Любов до тварин</h4>
                    <p>Ми щиро любимо те, що робимо.</p>
                </div>
            </div>
        </section>

        <section id="gallery" className="my-5">
            <h2 className="text-center mb-4">Наші улюбленці</h2>
            <div className="row g-3">
                <div className="col-md-4">
                    <img src="/catToy.png" alt="Cat with toy" className="img-fluid rounded"/>
                </div>
                <div className="col-md-4">
                    <img src="/dogWoman.png" alt="Woman with dog" className="img-fluid rounded"/>
                </div>
                <div className="col-md-4">
                    <img src="/chinchilla1.jpg" alt="Chinchilla image" className="img-fluid rounded"/>
                </div>
            </div>
        </section>
    </>
  )
}
