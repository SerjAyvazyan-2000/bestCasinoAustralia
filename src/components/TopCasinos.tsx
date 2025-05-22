'use client';


import React from "react";

const TopCasinos = () => {
    return (
        <section className="bg-black py-16 px-4">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-4xl text-yellow-400 font-bold text-center mb-12">
                    Top 3 Australian Casinos
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div
                        className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl p-6 border-2 border-red-700 shadow-lg relative">
                        {/* Логотип казино */}
                        <div className="flex items-center space-x-4 mb-4">
                            <img src="https://tse2.mm.bing.net/th?id=OIP.-dp6Iy9hXaPEd8V8DQO_iAHaHa&w=474&h=474&c=7"
                                 alt="Spinsy Casino" className="w-16 h-16 rounded"/>
                            <span className="text-xl font-bold text-white">Spinsy Casino</span>
                        </div>

                        {/* Бонусы */}
                        <ul className="text-sm text-gray-300 space-y-2 mb-4">
                            <li>• Welcome Bonus: 100% до AU$4,000 + 150 FS</li>
                            <li>• Weekend Reload: 50% до AU$1,050 + 50 FS</li>
                            <li>• Weekly Cashback: 15% до AU$4,500</li>
                        </ul>

                        {/* Платежные методы */}
                        <div className="flex flex-wrap items-center gap-4 mb-4">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" alt="Visa"
                                 className="h-5"/>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png"
                                 alt="MasterCard" className="h-5"/>
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1-FP7UVbTyyHBApbqeGb5XW2hfAFssDbGmA&s"
                                alt="Neteller" className="h-5"/>
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqSzqfN8pNpgAxyB7BSFuf0hQzOItfR_noXc9wMTVc76zKnbjTRQRUvEn29NEEXTz19vs&usqp=CAU"
                                alt="Skrill" className="h-5"/>
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4k_1Un7oCyiz0cEWS3W-MBNH3IsaHx-aRnQ&s"
                                alt="Neosurf" className="h-5"/>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/4/46/Bitcoin.svg" alt="Bitcoin"
                                 className="h-5"/>
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5tYA9S9Fv6a4SZYKte1fj5Tuaba1r2yPxwrK0k-xEP4Ej_CONzQ2IB75qQPF9o_QZdw&usqp=CAU"
                                alt="Paysafecard" className="h-5"/>
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbRDcm2Ecr6Xa51f1LAjfvdQ37gp2-K_zFfg&s"
                                alt="MiFinity" className="h-5"/>
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5IxODN_2vXr3k9MF_vdGJJVnqWDjWDthpny98TGwUHeNvnWkOYfC2Uavu-X0N54q5v6s&usqp=CAU"
                                alt="Bank Transfer" className="h-5"/>
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfp_3jN-zgVDJzWjr1I4lKWWRothBbWHb8hQ&s"
                                alt="Apple Pay" className="h-5"/>
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXgkn8U6befRTYF_GDWAUHj2bV1_2bCNqxEA&s"
                                alt="Google Pay" className="h-5"/>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/4/46/Bitcoin.svg" alt="Bitcoin"
                                 className="h-5"/>
                            <img
                                src="https://www.shutterstock.com/image-vector/3d-purple-ethereum-logo-on-260nw-2485476243.jpg"
                                alt="Ethereum" className="h-5"/>
                            <img
                                src="https://img.freepik.com/free-vector/litecoin-blockchain-cryptocurrency-logo-vector-open-source-finance-concept_53876-126024.jpg?ga=GA1.1.612413808.1746983323&semt=ais_hybrid&w=740"
                                alt="Litecoin" className="h-5"/>
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGcttVBhyCMnl1e_iNaaK7Z6GRz5WZTlDc3g&s"
                                alt="Tether" className="h-5"/>
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4e5PN2qaf4uPM7mFuEZ_dtApJrwq6XakFEQ&s"
                                alt="Ripple" className="h-5"/>
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxvmhVFb83xR4kfiO-gHe4NjJIZWNh0IkWGg&s"
                                alt="Binance Pay" className="h-5"/>
                        </div>

                        {/* Рейтинг */}
                        <div className="flex items-center space-x-2 mb-6">
                            <div className="flex text-yellow-400 text-lg">
                                {"★".repeat(5)}
                            </div>
                            <p className="text-sm text-gray-400">4.9/5 (4,110 голосов)</p>
                        </div>

                        {/* Бонусная информация и кнопка */}
                        <div
                            className="bg-gray-800 rounded-xl border border-yellow-500 p-4 flex items-center justify-between mb-4">
                            <div className="text-center">
                                <p className="text-white text-sm">🎁</p>
                                <p className="text-white text-lg font-bold">AU$4,000</p>
                            </div>
                            <div className="text-center">
                                <p className="text-white text-sm">🔁</p>
                                <p className="text-white text-lg font-bold">150 FS</p>
                            </div>
                        </div>

                        <a href="https://www.spinsy.net/" target="_blank" rel="noopener noreferrer">
                            <button
                                className="w-full bg-gradient-to-r from-red-600 to-orange-400 text-white font-semibold py-2 rounded-xl hover:opacity-90 transition">
                                PLAY NOW
                            </button>
                        </a>
                    </div>

                    <div
                        className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl p-6 border-2 border-blue-700 shadow-lg relative">
                        {/* Логотип казино */}
                        <div className="flex items-center space-x-4 mb-4">
                            <img src="/Monster-Win-Casino-Logo.svg" alt="MonsterWin Casino"
                                 className="w-16 h-16 rounded"/>
                            <span className="text-xl font-bold text-white">MonsterWin Casino</span>
                        </div>

                        {/* Бонусы */}
                        <ul className="text-sm text-gray-300 space-y-2 mb-4">
                            <li>• Welcome Bonus: 100% до AU$750 + 200 FS</li>
                            <li>• Weekend Reload: 50% до AU$1,050 + 50 FS</li>
                            <li>• Weekly Cashback: 15% до AU$300 с вейджером x1</li>
                        </ul>

                        {/* Платежные методы */}
                        <div className="flex flex-wrap items-center gap-4 mb-4">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" alt="Visa"
                                 className="h-5"/>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png"
                                 alt="MasterCard" className="h-5"/>
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1-FP7UVbTyyHBApbqeGb5XW2hfAFssDbGmA&s"
                                alt="Neteller" className="h-5"/>
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqSzqfN8pNpgAxyB7BSFuf0hQzOItfR_noXc9wMTVc76zKnbjTRQRUvEn29NEEXTz19vs&usqp=CAU"
                                alt="Skrill" className="h-5"/>
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4k_1Un7oCyiz0cEWS3W-MBNH3IsaHx-aRnQ&s"
                                alt="Neosurf" className="h-5"/>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/4/46/Bitcoin.svg" alt="Bitcoin"
                                 className="h-5"/>
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5tYA9S9Fv6a4SZYKte1fj5Tuaba1r2yPxwrK0k-xEP4Ej_CONzQ2IB75qQPF9o_QZdw&usqp=CAU"
                                alt="Paysafecard" className="h-5"/>
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbRDcm2Ecr6Xa51f1LAjfvdQ37gp2-K_zFfg&s"
                                alt="MiFinity" className="h-5"/>
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5IxODN_2vXr3k9MF_vdGJJVnqWDjWDthpny98TGwUHeNvnWkOYfC2Uavu-X0N54q5v6s&usqp=CAU"
                                alt="Bank Transfer" className="h-5"/>
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfp_3jN-zgVDJzWjr1I4lKWWRothBbWHb8hQ&s"
                                alt="Apple Pay" className="h-5"/>
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXgkn8U6befRTYF_GDWAUHj2bV1_2bCNqxEA&s"
                                alt="Google Pay" className="h-5"/>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/4/46/Bitcoin.svg" alt="Bitcoin"
                                 className="h-5"/>
                            <img
                                src="https://www.shutterstock.com/image-vector/3d-purple-ethereum-logo-on-260nw-2485476243.jpg"
                                alt="Ethereum" className="h-5"/>
                            <img
                                src="https://img.freepik.com/free-vector/litecoin-blockchain-cryptocurrency-logo-vector-open-source-finance-concept_53876-126024.jpg?ga=GA1.1.612413808.1746983323&semt=ais_hybrid&w=740"
                                alt="Litecoin" className="h-5"/>
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGcttVBhyCMnl1e_iNaaK7Z6GRz5WZTlDc3g&s"
                                alt="Tether" className="h-5"/>
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4e5PN2qaf4uPM7mFuEZ_dtApJrwq6XakFEQ&s"
                                alt="Ripple" className="h-5"/>
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxvmhVFb83xR4kfiO-gHe4NjJIZWNh0IkWGg&s"
                                alt="Binance Pay" className="h-5"/>
                        </div>

                        {/* Рейтинг */}
                        <div className="flex items-center space-x-2 mb-6">
                            <div className="flex text-yellow-400 text-lg">
                                {"★".repeat(4)}{"☆"}
                            </div>
                            <p className="text-sm text-gray-400">4.5/5 (1,200 голосов)</p>
                        </div>

                        {/* Бонусная информация и кнопка */}
                        <div
                            className="bg-gray-800 rounded-xl border border-yellow-500 p-4 flex items-center justify-between mb-4">
                            <div className="text-center">
                                <p className="text-white text-sm">🎁</p>
                                <p className="text-white text-lg font-bold">AU$750</p>
                            </div>
                            <div className="text-center">
                                <p className="text-white text-sm">🔁</p>
                                <p className="text-white text-lg font-bold">200 FS</p>
                            </div>
                        </div>

                        <a href="https://monster-win.com/" target="_blank" rel="noopener noreferrer">
                            <button
                                className="w-full bg-gradient-to-r from-blue-600 to-purple-400 text-white font-semibold py-2 rounded-xl hover:opacity-90 transition">
                                PLAY NOW
                            </button>
                        </a>
                    </div>
                    <div
                        className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl p-6 border-2 border-green-700 shadow-lg relative">
                        {/* Логотип казино */}
                        <div className="flex items-center space-x-4 mb-4">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShmerS5hn88zir1jqUgIW3706Dn1nZ4dzzMg&s"
                                alt="Golden Crown Casino" className="w-16 h-16 rounded"/>
                            <span className="text-xl font-bold text-white">Golden Crown Casino</span>
                        </div>

                        {/* Бонусы */}
                        <ul className="text-sm text-gray-300 space-y-2 mb-4">
                            <li>• Welcome Bonus: 100% до AU$1,500 + 300 FS</li>
                            <li>• Weekend Reload: 50% до AU$6,500 + 60 FS</li>
                            <li>• Free Spins Wednesday: До 100 бесплатных вращений</li>
                        </ul>

                        {/* Платежные методы */}
                        <div className="flex flex-wrap items-center gap-4 mb-4">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" alt="Visa"
                                 className="h-5"/>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png"
                                 alt="MasterCard" className="h-5"/>
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1-FP7UVbTyyHBApbqeGb5XW2hfAFssDbGmA&s"
                                alt="Neteller" className="h-5"/>
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqSzqfN8pNpgAxyB7BSFuf0hQzOItfR_noXc9wMTVc76zKnbjTRQRUvEn29NEEXTz19vs&usqp=CAU"
                                alt="Skrill" className="h-5"/>
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4k_1Un7oCyiz0cEWS3W-MBNH3IsaHx-aRnQ&s"
                                alt="Neosurf" className="h-5"/>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/4/46/Bitcoin.svg" alt="Bitcoin"
                                 className="h-5"/>
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5tYA9S9Fv6a4SZYKte1fj5Tuaba1r2yPxwrK0k-xEP4Ej_CONzQ2IB75qQPF9o_QZdw&usqp=CAU"
                                alt="Paysafecard" className="h-5"/>
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbRDcm2Ecr6Xa51f1LAjfvdQ37gp2-K_zFfg&s"
                                alt="MiFinity" className="h-5"/>
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5IxODN_2vXr3k9MF_vdGJJVnqWDjWDthpny98TGwUHeNvnWkOYfC2Uavu-X0N54q5v6s&usqp=CAU"
                                alt="Bank Transfer" className="h-5"/>
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfp_3jN-zgVDJzWjr1I4lKWWRothBbWHb8hQ&s"
                                alt="Apple Pay" className="h-5"/>
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXgkn8U6befRTYF_GDWAUHj2bV1_2bCNqxEA&s"
                                alt="Google Pay" className="h-5"/>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/4/46/Bitcoin.svg" alt="Bitcoin"
                                 className="h-5"/>
                            <img
                                src="https://www.shutterstock.com/image-vector/3d-purple-ethereum-logo-on-260nw-2485476243.jpg"
                                alt="Ethereum" className="h-5"/>
                            <img
                                src="https://img.freepik.com/free-vector/litecoin-blockchain-cryptocurrency-logo-vector-open-source-finance-concept_53876-126024.jpg?ga=GA1.1.612413808.1746983323&semt=ais_hybrid&w=740"
                                alt="Litecoin" className="h-5"/>
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGcttVBhyCMnl1e_iNaaK7Z6GRz5WZTlDc3g&s"
                                alt="Tether" className="h-5"/>
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4e5PN2qaf4uPM7mFuEZ_dtApJrwq6XakFEQ&s"
                                alt="Ripple" className="h-5"/>
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxvmhVFb83xR4kfiO-gHe4NjJIZWNh0IkWGg&s"
                                alt="Binance Pay" className="h-5"/>
                        </div>

                        {/* Рейтинг */}
                        <div className="flex items-center space-x-2 mb-6">
                            <div className="flex text-yellow-400 text-lg">
                                {"★".repeat(4)}{"☆"}
                            </div>
                            <p className="text-sm text-gray-400">4.5/5 (1,200 голосов)</p>
                        </div>

                        {/* Бонусная информация и кнопка */}
                        <div
                            className="bg-gray-800 rounded-xl border border-yellow-500 p-4 flex items-center justify-between mb-4">
                            <div className="text-center">
                                <p className="text-white text-sm">🎁</p>
                                <p className="text-white text-lg font-bold">AU$1,500</p>
                            </div>
                            <div className="text-center">
                                <p className="text-white text-sm">🔁</p>
                                <p className="text-white text-lg font-bold">300 FS</p>
                            </div>
                        </div>

                        <a href="https://www.goldencrowncasino.com/" target="_blank" rel="noopener noreferrer">
                            <button
                                className="w-full bg-gradient-to-r from-green-600 to-yellow-400 text-white font-semibold py-2 rounded-xl hover:opacity-90 transition">
                                PLAY NOW
                            </button>
                        </a>
                    </div>


                    {/* Добавь здесь карточки для других казино */}

                </div>
            </div>
        </section>
    );
};

export default TopCasinos;