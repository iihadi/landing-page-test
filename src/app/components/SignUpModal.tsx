
'use client';

import { useState, type FC } from 'react';
import Modal from './Modal';

interface SignUpModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSwitchToLogin: () => void;
}

const SignUpModal: FC<SignUpModalProps> = ({ isOpen, onClose, onSwitchToLogin }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <h2 className="text-2xl font-bold mb-1">Sign Up</h2>
            <p className="text-sm text-gray-600 mb-6">
                Already have an account? <a href="#" onClick={onSwitchToLogin} className="text-[#00a826] font-semibold hover:underline">Login here</a>
            </p>
            <form>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email-signup">Email</label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email-signup" type="email" placeholder="Email" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username-signup">Username</label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username-signup" type="text" placeholder="Username" />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password-signup">Password</label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password-signup" type="password" placeholder="Password" />
                </div>
                <button className="w-full bg-[#00a826] hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                    Create Account
                </button>
            </form>
        </Modal>
    );
};

export default SignUpModal;