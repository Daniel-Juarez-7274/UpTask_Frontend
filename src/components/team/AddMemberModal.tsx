import { Fragment } from 'react';
import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react';
import { useLocation, useNavigate } from 'react-router-dom';
import AddMemberForm from './AddMemberForm';

export default function AddMemberModal() {

    const location = useLocation()
    const navigate = useNavigate()

    const queryParams = new URLSearchParams(location.search);
    const addMember = queryParams.get('addMember');
    const show = addMember ? true : false

    const closeModal = () => navigate(location.pathname, { replace: true });

    return (
        <>
            <Transition appear show={show} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={() => navigate(location.pathname, { replace: true })}>
                    <TransitionChild
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/60" />
                    </TransitionChild>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <TransitionChild
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <DialogPanel className="relative w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all p-16">
                                    <button
                                        onClick={closeModal}
                                        className="absolute top-5 right-5 text-2xl font-bold text-gray-500 hover:text-gray-800"
                                        aria-label="Cerrar"
                                    >
                                        &times;
                                    </button>

                                    <DialogTitle
                                        as="h3"
                                        className="font-black text-4xl  my-5"
                                    >
                                        Agregar Integrante al equipo
                                    </DialogTitle>
                                    <p className="text-xl font-bold">Busca el nuevo integrante por email {''}
                                        <span className="text-fuchsia-600">para agregarlo al proyecto</span>
                                    </p>

                                    <AddMemberForm />

                                </DialogPanel>
                            </TransitionChild>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}