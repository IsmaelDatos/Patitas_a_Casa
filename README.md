# INSTRUCCIONES PARA CORRER LA IMPLEMENTACIÓN DEL SITIO WEB EN LA MAQUINA LOCAL

<h2>
	<ul>
		<li>Ramírez Martínez Ismael</li>
		<li>Valdés Nava Javier</li>
		<li>Cortés Bernardino David Emiliano</li>
	</ul>
</h2>

<h3>Mediante el enlace web alojado en Render:</h3>
<p>Simplemente copia y pega en el navegador web de su elección, el siguiente enlace:</p>
<a href = "https://patitas-a-casa.onrender.com/" target = "_blank"> https://patitas-a-casa.onrender.com/ </a>

<h3>Con una copia local (y suponiendo que se tiene un sistema UNIX/LINUX):</h3>
<p>Sigue los siguientes Pasos</p>

<ol>
	<li>
		<p><b>PASO 1:</b> Instala Python3; puedes instalarlo desde terminal tal que:</p>
		<p><b>Si el sistema es basado en Debian (como Ubuntu):</b></p>
		<p style = "text-align: center;">$ sudo apt update</p>
		<p style = "text-align: center;">$ sudo apt upgrade</p>
		<p style = "text-align: center;">$ sudo apt install python3</p>
		<p style = "text-align: center;">$ python3 --version // Verifica que se instaló</p>
		<p><b>Si el sistema es basado en Red Hat (como Fedora):</b></p>
		<p style = "text-align: center;">$ sudo dnf update // puedes cambiar dnf por yum</p>
		<p style = "text-align: center;">$ sudo dnf upgrade</p>
		<p style = "text-align: center;">$ sudo dnf install python3</p>
		<p style = "text-align: center;">$ python3 --version // Verifica que se instaló</p>
	</li>
	<li>
		<p><b>PASO 2:</b> Instala Python3-pip; puedes instalarlo desde terminal tal que:</p>
		<p><b>Si el sistema es basado en Debian (como Ubuntu):</b></p>
		<p style = "text-align: center;">$ sudo apt install python3-pip</p>
		<p><b>Si el sistema es basado en Red Hat (como Fedora):</b></p>
		<p style = "text-align: center;">$ sudo dnf install python3-pip // puedes cambiar dnf por yum</p>
	</li>
	<li>
		<p><b>PASO 3:</b> Instala postgresql; puedes instalarlo desde terminal tal que:</p>
		<p><b>Si el sistema es basado en Debian (como Ubuntu):</b></p>
		<p style = "text-align: center;">$ sudo apt update</p>
		<p style = "text-align: center;">$ sudo apt upgrade</p>
		<p style = "text-align: center;">$ sudo apt install postgresql</p>
		<p style = "text-align: center;">$ psql --version // Verifica que se instaló</p>
		<p><b>Si el sistema es basado en Red Hat (como Fedora):</b></p>
		<p style = "text-align: center;">$ sudo dnf update // puedes cambiar dnf por yum</p>
		<p style = "text-align: center;">$ sudo dnf upgrade</p>
		<p style = "text-align: center;">$ sudo dnf install postgresql-server postgresql-contrib</p>
		<p style = "text-align: center;">$ psql --version // Verifica que se instaló</p>
	</li>
	<li>
		<p><b>PASO 4:</b> Activa postgresql; para ello, basta con que ejecutes los comandos: </p>
		<p style = "text-align: center;">$ sudo systemctl enable postgresql</p>
		<p style = "text-align: center;">$ sudo systemctl enable postgresql</p>
		<p style = "text-align: center;">$ sudo postgresql-setup --initdb --unit postgresql</p>
		<p style = "text-align: center;">$ sudo systemctl start postgresql</p>	
	</li>
	<li>
		<p><b>PASO 5:</b> Crea el usuario postgres y la base de datos; tal que:</p>
		<p style = "text-align: center;">$ sudo -u postgres psql</p>
		<p style = "text-align: center;">postgres=# CREATE USER ismael WITH PASSWORD 'isma123';</p>
		<p style = "text-align: center;">postgres=# CREATE DATABASE patitas_a_casa;</p>
		<p style = "text-align: center;">postgres=# GRANT ALL PRIVILEGES ON DATABASE patitas_a_casa TO ismael;</p>
		<p style = "text-align: center;">postgres=# ALTER DATABASE patitas_a_casa OWNER TO ismael;</p>
		<p>Sal del ambiente postgres simplemente escribiendo "\q"</p>
		<p style = "text-align: center;">postgres=# \q</p>
		<p style = "text-align: center;">$ | </p>
	</li>
	<li>
		<p><b>PASO 6:</b> Instala el driver psycopg2; puedes hacerlo tal que:</p>
		<p style = "text-align: center;">$ python -m pip install psycopg2</p>
	</li>
	<li>
		<p><b>PASO 7:</b> Descarga el repositorio; ya sea clonandolo desde la terminal utilizando:</p>
		<p style = "text-align: center;">$ git clone https://github.com/IsmaelDatos/Patitas_a_Casa.git</p>
		<p>O descargandolo como un ZIP desde el enlace de descarga automatica</p>
		<p style = "text-align: center;">https://github.com/IsmaelDatos/Patitas_a_Casa/archive/refs/heads/main.zip</p>
	</li>
	<li>
		<p><b>PASO 8:</b> Abres tu terminal y entras al directorio. Ya sea desde donde lo clonaste utilizando el comando</p>
		<p style = "text-align: center;">$ cd Patitas_a_Casa</p>
		<p>O si lo descargaste como un ZIP, primero abre el explorador de archivos en la ubicación del archivo descargado, crea una nueva carpeta llamada "Patitas_a_Casa", mueve el archivo comprimido dentro de ella, descomprime el Archivo dentro de ella, y finalmente desde la terminal dirigete a la ubicación de la carpeta recien creada, para ello, copia la dirección desde el explorador de archivos, abre la terminal y teclea cd y acto seguido pega la dirección que acabas de copiar.</p>
	</li>
	<li>
		<p><b>PASO 9:</b> Crea un entorno virtual utilizando el comando</p>
		<p style = "text-align: center;">~:Patitas_a_casa $ python3 -m venv venv</p>
	</li>
	<li>
		<p><b>PASO 10:</b> Activa el entorno virtual</p>
		<p style = "text-align: center;">~:Patitas_a_casa $ source venv/bin/activate</p>
	</li>
	<li>
		<p><b>PASO 11:</b> Instala las dependencias</p>
		<p style = "text-align: center;">(venv) ~:Patitas_a_casa $ pip install -r requirements.txt</p>
	</li>
	<li>
		<p><b>PASO 12:</b> Prepara las migraciones; para eso, dirigete primero al directorio backend</p>
		<p style = "text-align: center;">(venv) ~:Patitas_a_casa $ cd backend</p>
		<p>Y ahora utiliza el comando "makemigrations"</p>
		<p style = "text-align: center;">(venv) ~:Patitas_a_casa/backend $ python3 manage.py makemigrations</p>
	</li>
	<li>
		<p><b>PASO 13:</b> Haz las migraciones; simplemente usa el comando migrate tal que</p>
		<p style = "text-align: center;">(venv) ~:Patitas_a_casa/backend $ python3 manage.py migrate</p>
	</li>
	<li>
		<p><b>PASO 14:</b> Ejecuta el servidor; </p>
		<p style = "text-align: center;">(venv) ~:Patitas_a_casa/backend $ python3 manage.py runserver</p>
		<p>Al ejecutar el servidor, se generará una url;</p>
		<p style = "text-align: center;"> http://127.0.0.1:8000/ <p>
		<p>Copiala y pegala en tu navegador web y veras la pantalla principal</p>
		<p>FIN</p>
	</li>
</ol>
<h4>Como sea que accedas, disfruta tu página web :D</h4>
<p>recuerda desactivar el ambiente virtual usando el comando "(venv) ~: $ deactivate"</p>
