import 'bootstrap/dist/css/bootstrap.min.css'; 

export const metadata = {
  title: "Info. malla vial Medellin",
  description: "Sitio web para ver la información general de los segmentos de la malla vial en Medellín",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>        
        {children}
      </body>
    </html>
  );
}

