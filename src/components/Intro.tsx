"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function Intro() {
    return(
        <div className="w-full h-full flex flex-col justify-center items-center">
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="text-white text-center text-[7vw] leading-tight"
            >
                Informasjonsteknologi og <br />Medieproduksjon
            </motion.div>

            <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
                className="pt-20 w-full left-0 flex justify-center"
            >
                <Link 
                    href="https://"
                    className="text-[2vw] underline text-sky-600"
                >
                    Link til nettsiden
                </Link>
            </motion.div>

            <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 2.2 }}
                className="w-full left-0 flex justify-center"
            >
                <div 
                    className="text-[2vw] text-white"
                >
                    Laget av Lucas og Odin
                </div>
            </motion.div>
        </div>
    )
}