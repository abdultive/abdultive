import { useState } from 'react';

const PaymentMethods = () => {
    return (
        <section id="payment" className="py-24 border-t border-border bg-card/50">
            <div className="container">
                <div className="mb-16">
                    <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4 block">
                        Payment
                    </span>
                    <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tightest leading-[1.1]">
                        Accepted Methods
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* PayPal */}
                    <div className="group p-8 rounded-3xl border border-border bg-background hover:border-foreground/20 transition-colors relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                            <svg className="w-24 h-24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M7.076 21.337l.756-4.792h3.25c3.551 0 6.633-1.34 7.933-4.57 1.05-2.61.34-5.362-1.928-7.398-2.023-1.815-4.85-2.22-7.536-2.22H2.3l-.117.732-.383 2.502-.852 5.488-.138.896h5.45l.816-5.226h4.375c1.71 0 3.033.454 3.766 1.696.536.906.49 2.214-.263 3.655-.916 1.76-2.585 2.66-5.232 2.66H7.72l-.38 2.45-.48 3.085h5.45c2.31 0 4.14-1.266 4.96-3.41.6-1.57.545-3.083-.16-4.305.518-.61 1.002-1.35 1.39-2.26 1.4-3.29.54-6.425-2.26-8.91C14.07 1.5 10.63 1 7.15 1H2.13L2.09 1.27.05 14.59l-.02.147h6.29l.756-4.8z" />
                            </svg>
                        </div>
                        <div className="relative z-10 flex flex-col h-full justify-between gap-8">
                            <div className="w-12 h-12 rounded-full bg-[#003087] flex items-center justify-center text-white">
                                <span className="font-bold italic">P</span>
                            </div>
                            <div>
                                <h3 className="font-display text-xl font-medium mb-2">PayPal</h3>
                                <p className="text-sm text-muted-foreground">Secure international payments</p>
                            </div>
                        </div>
                    </div>

                    {/* Payoneer */}
                    <div className="group p-8 rounded-3xl border border-border bg-background hover:border-foreground/20 transition-colors relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                            <svg className="w-24 h-24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                            </svg>
                        </div>
                        <div className="relative z-10 flex flex-col h-full justify-between gap-8">
                            <div className="w-12 h-12 rounded-full bg-[#FF4800] flex items-center justify-center text-white">
                                <span className="font-bold">Y</span>
                            </div>
                            <div>
                                <h3 className="font-display text-xl font-medium mb-2">Payoneer</h3>
                                <p className="text-sm text-muted-foreground">Global bank transfer solution</p>
                            </div>
                        </div>
                    </div>

                    {/* Crypto */}
                    <div className="group p-8 rounded-3xl border border-border bg-background hover:border-foreground/20 transition-colors relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                            <svg className="w-24 h-24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
                            </svg>
                        </div>
                        <div className="relative z-10 flex flex-col h-full justify-between gap-8">
                            <div className="w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center">
                                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
                                </svg>
                            </div>

                            <div>
                                <div className="flex items-center gap-2 mb-3">
                                    <h3 className="font-display text-xl font-medium">Crypto</h3>
                                    <div className="flex gap-1">
                                        <span className="px-2 py-0.5 rounded-full bg-accent/20 text-accent-foreground text-[10px] uppercase font-mono tracking-wider border border-accent/20">USDT</span>
                                        <span className="px-2 py-0.5 rounded-full bg-accent/20 text-accent-foreground text-[10px] uppercase font-mono tracking-wider border border-accent/20">BTC</span>
                                    </div>
                                </div>
                                <p className="text-sm text-muted-foreground">Fast & secure blockchain transfers</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PaymentMethods;
