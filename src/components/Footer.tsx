import React from 'react';
import { Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-bg-night text-text-night py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        {/* Column 1: Logo & Description */}
        <div>
          <img
            src="/marea-gemini/fotos/logo.jpg"
            alt="Marea Club"
            className="w-20 h-20 rounded-lg mb-4 object-cover"
          />
          <h3 className="text-xl font-bold mb-3">Marea Club</h3>
          <p className="text-text-night text-opacity-70 text-sm leading-relaxed">
            El mejor beach club de la ría de Huelva. Cócteles premium, vistas espectaculares y ambiente único para tus tardes de verano.
          </p>
        </div>

        {/* Column 2: Legal */}
        <div>
          <h4 className="text-lg font-bold mb-4">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="text-text-night text-opacity-70 hover:text-opacity-100 transition-all">
                Aviso Legal
              </a>
            </li>
            <li>
              <a href="#" className="text-text-night text-opacity-70 hover:text-opacity-100 transition-all">
                Política de Privacidad
              </a>
            </li>
            <li>
              <a href="#" className="text-text-night text-opacity-70 hover:text-opacity-100 transition-all">
                Cookies
              </a>
            </li>
            <li>
              <a href="#" className="text-text-night text-opacity-70 hover:text-opacity-100 transition-all">
                Términos de Servicio
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact */}
        <div>
          <h4 className="text-lg font-bold mb-4">Contacto</h4>
          <div className="space-y-3 text-sm">
            <div className="flex items-start gap-3">
              <Phone className="w-4 h-4 mt-1 flex-shrink-0" />
              <a href="tel:+34659123456" className="text-text-night text-opacity-70 hover:text-opacity-100 transition-all">
                +34 659 123 456
              </a>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
              <p className="text-text-night text-opacity-70">
                Ría de Huelva<br />
                21002 Huelva, España
              </p>
            </div>
          </div>
          <p className="mt-4 text-sm text-text-night text-opacity-70">
            <strong>Horario:</strong><br />
            Mar - Dom: 18:00 - 02:00<br />
            Lunes: Cerrado
          </p>
        </div>

        {/* Column 4: Google Maps */}
        <div>
          <h4 className="text-lg font-bold mb-4">Ubicación</h4>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3115.6851485835607!2d-6.9597!3d37.2548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd120c5e8e5e5e5%3A0x0!2sHuelva!5e0!3m2!1ses!2ses!4v1234567890"
            width="100%"
            height="200"
            style={{ border: 0, borderRadius: '0.5rem' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-text-night border-opacity-10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-text-night text-opacity-70 text-sm">
          © 2024 Marea Club. Todos los derechos reservados.
        </p>
        <div className="flex gap-6">
          <a href="#" className="text-text-night text-opacity-70 hover:text-opacity-100 transition-all text-sm">
            Instagram
          </a>
          <a href="#" className="text-text-night text-opacity-70 hover:text-opacity-100 transition-all text-sm">
            Facebook
          </a>
          <a href="#" className="text-text-night text-opacity-70 hover:text-opacity-100 transition-all text-sm">
            TikTok
          </a>
        </div>
      </div>
    </footer>
  );
};
