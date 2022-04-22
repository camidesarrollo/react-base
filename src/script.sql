INSERT INTO public.vigencia(
	id, name)
	VALUES (1, 'Vigente');
INSERT INTO public.vigencia(
	id, name)
	VALUES (2, 'No vigente');
INSERT INTO public.roles(
	id, name, vigencia_id)
	VALUES (1, 'Administrador', 1);
INSERT INTO public.roles(
	id, name, vigencia_id)
	VALUES (2, 'Director Comercia', 1);
INSERT INTO public.roles(
	id, name, vigencia_id)
	VALUES (3, 'Gerente Comercial', 1);

INSERT INTO public.roles(
	id, name, vigencia_id)
	VALUES (4, 'Ejecutivo Comercial', 1);
INSERT INTO public.roles(
	id, name, vigencia_id)
	VALUES (5, 'Vendedor', 1);
INSERT INTO public.roles(
	id, name, vigencia_id)
	VALUES (6, 'Asistente Comercial', 1);
INSERT INTO public.menu(
	menu_id, argumentos, descripcion, menu_icon, menu_path, menu_title, tipo_menu, vigencia_id)
	VALUES (1, 'x', 'x', 'x', '/configuraciones', 'Configuraciones', '0', 1);
INSERT INTO public.menu(
	menu_id, argumentos, descripcion, menu_icon, menu_path, menu_title, tipo_menu, vigencia_id)
	VALUES (21, 'x', 'x', 'x', '/mantenedor_menu', 'Mantenedor Menu', '1', 1);
 INSERT INTO public.menu_roles(
 	menu_id, role_id)
 	VALUES (1,1);
 INSERT INTO public.menu_roles(
 	menu_id, role_id)
 	VALUES (21,1);
	INSERT INTO public.privilegios(
	privilegios_id, actualizar, crear, ver, role_id)
	VALUES (1, true, true, true, 1);
INSERT INTO public.privilegios(
	privilegios_id, actualizar, crear, ver, role_id)
	VALUES (2, true, true, true,2);
INSERT INTO public.privilegios(
	privilegios_id, actualizar, crear, ver, role_id)
	VALUES (3, true, true, true,3);
INSERT INTO public.privilegios(
	privilegios_id, actualizar, crear, ver, role_id)
	VALUES (4, true, true, true,4);
INSERT INTO public.privilegios(
	privilegios_id, actualizar, crear, ver, role_id)
	VALUES (5, true, true, true,5);
INSERT INTO public.privilegios(
	privilegios_id, actualizar, crear, ver, role_id)
	VALUES (6, true, true, true,6);
    INSERT INTO public.users(
 id, ap_materno, ap_paterno, dv, email, nombres, password, rut, telefono, username, vigencia_id)
 VALUES (2,'Naranjo','Gonzalez','7','gonzalez.naranjo@gmail.com','Bere','$2a$10$FxxMIGNqLDwyJGkB9bK9meuoQtlb4gjTZM.P.FutBm.Ffa9AQmHq.','23819261','123456789','Ber_Gon','1');
INSERT INTO public.users(
 id, ap_materno, ap_paterno, dv, email, nombres, password, rut, telefono, username, vigencia_id)
 VALUES (3,'Campos','Naranjo','k','naranjo.campos@gmail.com','Alexis','$2a$10$FxxMIGNqLDwyJGkB9bK9meuoQtlb4gjTZM.P.FutBm.Ffa9AQmHq.','15297227','147258369','Ale_Nar','1');
INSERT INTO public.users(
 id, ap_materno, ap_paterno, dv, email, nombres, password, rut, telefono, username, vigencia_id)
 VALUES (4,'Campos','Hernandez','3','hernandez.campos@gmail.com','Sergio Alejandro','$2a$10$FxxMIGNqLDwyJGkB9bK9meuoQtlb4gjTZM.P.FutBm.Ffa9AQmHq.','7811209','987654321','Ser_Her','1');
INSERT INTO public.users(
 id, ap_materno, ap_paterno, dv, email, nombres, password, rut, telefono, username, vigencia_id)
 VALUES (5,'Berumen','Cedillo','4','cedillo.berumen@gmail.com','Diego Ismael','$2a$10$FxxMIGNqLDwyJGkB9bK9meuoQtlb4gjTZM.P.FutBm.Ffa9AQmHq.','11712587','963852741','Die_Ced','1');
INSERT INTO public.users(
 id, ap_materno, ap_paterno, dv, email, nombres, password, rut, telefono, username, vigencia_id)
 VALUES (6,'Escalante','Palafox','1','palafox.escalante@gmail.com','Aurora','$2a$10$FxxMIGNqLDwyJGkB9bK9meuoQtlb4gjTZM.P.FutBm.Ffa9AQmHq.','5883273','741852963','Aur_Pal','1');
INSERT INTO public.users(
 id, ap_materno, ap_paterno, dv, email, nombres, password, rut, telefono, username, vigencia_id)
 VALUES (7,'Estrada','Barba','2','barba.estrada@gmail.com','Joycelene Fabiola','$2a$10$FxxMIGNqLDwyJGkB9bK9meuoQtlb4gjTZM.P.FutBm.Ffa9AQmHq.','11036496','123456789','Joy_Bar','1');
INSERT INTO public.users(
 id, ap_materno, ap_paterno, dv, email, nombres, password, rut, telefono, username, vigencia_id)
 VALUES (8,'Estrada','Gomez','k','gomez.estrada@gmail.com','Francisco','$2a$10$FxxMIGNqLDwyJGkB9bK9meuoQtlb4gjTZM.P.FutBm.Ffa9AQmHq.','22595142','147258369','Fra_Gom','1');
INSERT INTO public.users(
 id, ap_materno, ap_paterno, dv, email, nombres, password, rut, telefono, username, vigencia_id)
 VALUES (9,'Farias','Rosas','k','rosas.farias@gmail.com','Leonardo Daniel','$2a$10$FxxMIGNqLDwyJGkB9bK9meuoQtlb4gjTZM.P.FutBm.Ffa9AQmHq.','12261526','987654321','Leo_Ros','1');
INSERT INTO public.users(
 id, ap_materno, ap_paterno, dv, email, nombres, password, rut, telefono, username, vigencia_id)
 VALUES (10,'Fierros','Robles','6','robles.fierros@gmail.com','Ramon Andres','$2a$10$FxxMIGNqLDwyJGkB9bK9meuoQtlb4gjTZM.P.FutBm.Ffa9AQmHq.','21318401','963852741','Ram_Rob','1');
INSERT INTO public.users(
 id, ap_materno, ap_paterno, dv, email, nombres, password, rut, telefono, username, vigencia_id)
 VALUES (11,'Flores','Olivares','9','olivares.flores@gmail.com','Edgar Andres','$2a$10$FxxMIGNqLDwyJGkB9bK9meuoQtlb4gjTZM.P.FutBm.Ffa9AQmHq.','23062361','741852963','Edg_Oli','1');
INSERT INTO public.users(
 id, ap_materno, ap_paterno, dv, email, nombres, password, rut, telefono, username, vigencia_id)
 VALUES (12,'Franco','Esquivel','k','esquivel.franco@gmail.com','Maria Fernanda','$2a$10$FxxMIGNqLDwyJGkB9bK9meuoQtlb4gjTZM.P.FutBm.Ffa9AQmHq.','21592520','123456789','Mar_Esq','1');
INSERT INTO public.users(
 id, ap_materno, ap_paterno, dv, email, nombres, password, rut, telefono, username, vigencia_id)
 VALUES (13,'Galvan','Muñiz','9','muñiz.galvan@gmail.com','Alejandro','$2a$10$FxxMIGNqLDwyJGkB9bK9meuoQtlb4gjTZM.P.FutBm.Ffa9AQmHq.','24251722','147258369','Ale_Muñ','1');
INSERT INTO public.users(
 id, ap_materno, ap_paterno, dv, email, nombres, password, rut, telefono, username, vigencia_id)
 VALUES (14,'Gutierrez','Ortiz','3','ortiz.gutierrez@gmail.com','Martha Alicia','$2a$10$FxxMIGNqLDwyJGkB9bK9meuoQtlb4gjTZM.P.FutBm.Ffa9AQmHq.','16621174','987654321','Mar_Ort','1');
INSERT INTO public.users(
 id, ap_materno, ap_paterno, dv, email, nombres, password, rut, telefono, username, vigencia_id)
 VALUES (15,'Hernandez','Saucedo','3','saucedo.hernandez@gmail.com','Josafat Gerardo','$2a$10$FxxMIGNqLDwyJGkB9bK9meuoQtlb4gjTZM.P.FutBm.Ffa9AQmHq.','13383637','963852741','Jos_Sau','1');
INSERT INTO public.users(
 id, ap_materno, ap_paterno, dv, email, nombres, password, rut, telefono, username, vigencia_id)
 VALUES (16,'Jimenez','Gonzalez','0','gonzalez.jimenez@gmail.com','Rosalia','$2a$10$FxxMIGNqLDwyJGkB9bK9meuoQtlb4gjTZM.P.FutBm.Ffa9AQmHq.','19852632','741852963','Ros_Gon','1');
INSERT INTO public.users(
 id, ap_materno, ap_paterno, dv, email, nombres, password, rut, telefono, username, vigencia_id)
 VALUES (17,'Jimenez','Rios','1','rios.jimenez@gmail.com','Laura Celene','$2a$10$FxxMIGNqLDwyJGkB9bK9meuoQtlb4gjTZM.P.FutBm.Ffa9AQmHq.','8309414','123456789','Lau_Rio','1');
INSERT INTO public.users(
 id, ap_materno, ap_paterno, dv, email, nombres, password, rut, telefono, username, vigencia_id)
 VALUES (18,'Lopez','Cortes','9','cortes.lopez@gmail.com','Angelica','$2a$10$FxxMIGNqLDwyJGkB9bK9meuoQtlb4gjTZM.P.FutBm.Ffa9AQmHq.','17536653','147258369','Ang_Cor','1');
INSERT INTO public.users(
 id, ap_materno, ap_paterno, dv, email, nombres, password, rut, telefono, username, vigencia_id)
 VALUES (19,'Lopez','Gomez','3','gomez.lopez@gmail.com','Cristian Ivan','$2a$10$FxxMIGNqLDwyJGkB9bK9meuoQtlb4gjTZM.P.FutBm.Ffa9AQmHq.','17378545','987654321','Cri_Gom','1');
INSERT INTO public.users(
 id, ap_materno, ap_paterno, dv, email, nombres, password, rut, telefono, username, vigencia_id)
 VALUES (20,'Lopez','Meza','7','meza.lopez@gmail.com','Marlene Gabriela','$2a$10$FxxMIGNqLDwyJGkB9bK9meuoQtlb4gjTZM.P.FutBm.Ffa9AQmHq.','11884852','963852741','Mar_Mez','1');
INSERT INTO public.users(
 id, ap_materno, ap_paterno, dv, email, nombres, password, rut, telefono, username, vigencia_id)
 VALUES (21,'Medina','Ibarra','8','ibarra.medina@gmail.com','Alejandra','$2a$10$FxxMIGNqLDwyJGkB9bK9meuoQtlb4gjTZM.P.FutBm.Ffa9AQmHq.','11166242','741852963','Ale_Iba','1');
INSERT INTO public.users(
 id, ap_materno, ap_paterno, dv, email, nombres, password, rut, telefono, username, vigencia_id)
 VALUES (22,'Mejia','Alvarez','0','alvarez.mejia@gmail.com','Consuelo Yuridiana Thalia','$2a$10$FxxMIGNqLDwyJGkB9bK9meuoQtlb4gjTZM.P.FutBm.Ffa9AQmHq.','11189803','123456789','Con_Alv','1');
INSERT INTO public.users(
 id, ap_materno, ap_paterno, dv, email, nombres, password, rut, telefono, username, vigencia_id)
 VALUES (23,'Mejia','Alvarez','2','alvarez.rivera@gmail.com','Javier Adrian','$2a$10$FxxMIGNqLDwyJGkB9bK9meuoQtlb4gjTZM.P.FutBm.Ffa9AQmHq.','14355134','147258369','Jav_Alv','1');
INSERT INTO public.users(
 id, ap_materno, ap_paterno, dv, email, nombres, password, rut, telefono, username, vigencia_id)
 VALUES (24,'Peña','Gutierrez','2','gutierrez.peña@gmail.com','Juan Carlos Evaristo','$2a$10$FxxMIGNqLDwyJGkB9bK9meuoQtlb4gjTZM.P.FutBm.Ffa9AQmHq.','17415005','987654321','Jua_Gut','1');
INSERT INTO public.users(
 id, ap_materno, ap_paterno, dv, email, nombres, password, rut, telefono, username, vigencia_id)
 VALUES (25,'Perez','Velez','2','velez.perez@gmail.com','Jazmin Alejandra','$2a$10$FxxMIGNqLDwyJGkB9bK9meuoQtlb4gjTZM.P.FutBm.Ffa9AQmHq.','12355234','963852741','Jaz_Vel','1');
INSERT INTO public.users(
 id, ap_materno, ap_paterno, dv, email, nombres, password, rut, telefono, username, vigencia_id)
 VALUES (26,'Ramirez','Rivera','6','rivera.ramirez@gmail.com','Gustavo','$2a$10$FxxMIGNqLDwyJGkB9bK9meuoQtlb4gjTZM.P.FutBm.Ffa9AQmHq.','5441565','741852963','Gus_Riv','1');
INSERT INTO public.users(
 id, ap_materno, ap_paterno, dv, email, nombres, password, rut, telefono, username, vigencia_id)
 VALUES (27,'Rodriguez','Ascencio','3','ascencio.rodriguez@gmail.com','Carlos Nivardo','$2a$10$FxxMIGNqLDwyJGkB9bK9meuoQtlb4gjTZM.P.FutBm.Ffa9AQmHq.','7643636','123456789','Car_Asc','1');
INSERT INTO public.users(
 id, ap_materno, ap_paterno, dv, email, nombres, password, rut, telefono, username, vigencia_id)
 VALUES (28,'Romero','Luevanos','6','luevanos.romero@gmail.com','Karla Johana','$2a$10$FxxMIGNqLDwyJGkB9bK9meuoQtlb4gjTZM.P.FutBm.Ffa9AQmHq.','23511371','147258369','Kar_Lue','1');
INSERT INTO public.users(
 id, ap_materno, ap_paterno, dv, email, nombres, password, rut, telefono, username, vigencia_id)
 VALUES (29,'Ruiz','Hernandez','k','hernandez.ruiz@gmail.com','Yessica Yoselinne','$2a$10$FxxMIGNqLDwyJGkB9bK9meuoQtlb4gjTZM.P.FutBm.Ffa9AQmHq.','20915031','987654321','Yes_Her','1');
INSERT INTO public.users(
 id, ap_materno, ap_paterno, dv, email, nombres, password, rut, telefono, username, vigencia_id)
 VALUES (30,'Salas','Sanchez','7','sanchez.salas@gmail.com','Christian Eduardo','$2a$10$FxxMIGNqLDwyJGkB9bK9meuoQtlb4gjTZM.P.FutBm.Ffa9AQmHq.','8816924','963852741','Chr_San','1');
INSERT INTO public.users(
 id, ap_materno, ap_paterno, dv, email, nombres, password, rut, telefono, username, vigencia_id)
 VALUES (31,'Saldaña','Espinoza','9','espinoza.saldaña@gmail.com','Luis Roberto','$2a$10$FxxMIGNqLDwyJGkB9bK9meuoQtlb4gjTZM.P.FutBm.Ffa9AQmHq.','6598680','741852963','Lui_Esp','1');
INSERT INTO public.users(
 id, ap_materno, ap_paterno, dv, email, nombres, password, rut, telefono, username, vigencia_id)
 VALUES (32,'Sanchez','Ortiz','9','ortiz.sanchez@gmail.com','Adrian','$2a$10$FxxMIGNqLDwyJGkB9bK9meuoQtlb4gjTZM.P.FutBm.Ffa9AQmHq.','10408410','123456789','Adr_Ort','1');
INSERT INTO public.users(
 id, ap_materno, ap_paterno, dv, email, nombres, password, rut, telefono, username, vigencia_id)
 VALUES (33,'Suarez','Hernandez','7','hernandez.suarez@gmail.com','Eduardo Yair','$2a$10$FxxMIGNqLDwyJGkB9bK9meuoQtlb4gjTZM.P.FutBm.Ffa9AQmHq.','9933787','147258369','Edu_Her','1');
INSERT INTO public.users(
 id, ap_materno, ap_paterno, dv, email, nombres, password, rut, telefono, username, vigencia_id)
 VALUES (34,'Tabarez','Garcia','1','garcia.tabarez@gmail.com','Juan Francisco','$2a$10$FxxMIGNqLDwyJGkB9bK9meuoQtlb4gjTZM.P.FutBm.Ffa9AQmHq.','17662100','987654321','Jua_Gar','1');
INSERT INTO public.users(
 id, ap_materno, ap_paterno, dv, email, nombres, password, rut, telefono, username, vigencia_id)
 VALUES (35,'Teran','Torres','7','torres.teran@gmail.com','Zuleica Elizabeth','$2a$10$FxxMIGNqLDwyJGkB9bK9meuoQtlb4gjTZM.P.FutBm.Ffa9AQmHq.','23287140','963852741','Zul_Tor','1');
INSERT INTO public.users(
 id, ap_materno, ap_paterno, dv, email, nombres, password, rut, telefono, username, vigencia_id)
 VALUES (36,'Vargas','Ayala','2','ayala.vargas@gmail.com','Adriana Yunuhen','$2a$10$FxxMIGNqLDwyJGkB9bK9meuoQtlb4gjTZM.P.FutBm.Ffa9AQmHq.','12909100','741852963','Adr_Aya','1');
INSERT INTO public.users(
 id, ap_materno, ap_paterno, dv, email, nombres, password, rut, telefono, username, vigencia_id)
 VALUES (37,'Velazquez','Alvarez','3','alvarez.velazquez@gmail.com','Oscar Uriel','$2a$10$FxxMIGNqLDwyJGkB9bK9meuoQtlb4gjTZM.P.FutBm.Ffa9AQmHq.','23087605','123456789','Osc_Alv','1');
INSERT INTO public.users(
 id, ap_materno, ap_paterno, dv, email, nombres, password, rut, telefono, username, vigencia_id)
 VALUES (38,'Corona','Diaz','8','diaz.corona@gmail.com','Erick De Jesus','$2a$10$FxxMIGNqLDwyJGkB9bK9meuoQtlb4gjTZM.P.FutBm.Ffa9AQmHq.','18783596','147258369','Eri_Dia','1');
INSERT INTO public.users(
 id, ap_materno, ap_paterno, dv, email, nombres, password, rut, telefono, username, vigencia_id)
 VALUES (39,'Ramos','Hernandez','2','hernandez.ramos@gmail.com','Maria Guadalupe','$2a$10$FxxMIGNqLDwyJGkB9bK9meuoQtlb4gjTZM.P.FutBm.Ffa9AQmHq.','7473772','987654321','Mar_Her','1');
INSERT INTO public.users(
 id, ap_materno, ap_paterno, dv, email, nombres, password, rut, telefono, username, vigencia_id)
 VALUES (40,'Jimenez','Ventura','7','ventura.jimenez@gmail.com','Jessica Noemi','$2a$10$FxxMIGNqLDwyJGkB9bK9meuoQtlb4gjTZM.P.FutBm.Ffa9AQmHq.','23250623','963852741','Jes_Ven','1');
INSERT INTO public.users(
 id, ap_materno, ap_paterno, dv, email, nombres, password, rut, telefono, username, vigencia_id)
 VALUES (41,'Rojas','Hernandez','3','hernandez.rojas@gmail.com','Flor Margarita','$2a$10$FxxMIGNqLDwyJGkB9bK9meuoQtlb4gjTZM.P.FutBm.Ffa9AQmHq.','9782453','741852963','Flo_Her','1');
INSERT INTO public.users(
 id, ap_materno, ap_paterno, dv, email, nombres, password, rut, telefono, username, vigencia_id)
 VALUES (42,'Alvarado','Valencia','7','valencia.alvarado@gmail.com','Luis Antonio','$2a$10$FxxMIGNqLDwyJGkB9bK9meuoQtlb4gjTZM.P.FutBm.Ffa9AQmHq.','24625523','741852963','Lui_Val','1');
INSERT INTO public.users(
 id, ap_materno, ap_paterno, dv, email, nombres, password, rut, telefono, username, vigencia_id)
 VALUES (43,'Aguilar','Padilla','7','padilla.aguilar@gmail.com','Edgar Ivan','$2a$10$FxxMIGNqLDwyJGkB9bK9meuoQtlb4gjTZM.P.FutBm.Ffa9AQmHq.','21295340','123456789','Edg_Pad','1');
INSERT INTO public.users(
 id, ap_materno, ap_paterno, dv, email, nombres, password, rut, telefono, username, vigencia_id)
 VALUES (44,'Michel','Sanchez','k','sanchez.michel@gmail.com','Luis Alfonso','$2a$10$FxxMIGNqLDwyJGkB9bK9meuoQtlb4gjTZM.P.FutBm.Ffa9AQmHq.','19526144','147258369','Lui_San','1');
INSERT INTO public.users(
 id, ap_materno, ap_paterno, dv, email, nombres, password, rut, telefono, username, vigencia_id)
 VALUES (45,'Silva','Rocha','6','rocha.silva@gmail.com','Jose Carlos','$2a$10$FxxMIGNqLDwyJGkB9bK9meuoQtlb4gjTZM.P.FutBm.Ffa9AQmHq.','12267068','987654321','Jos_Roc','1');
INSERT INTO public.users(
 id, ap_materno, ap_paterno, dv, email, nombres, password, rut, telefono, username, vigencia_id)
 VALUES (46,'Rodriguez','Reyes','0','reyes.rodriguez@gmail.com','Judith','$2a$10$FxxMIGNqLDwyJGkB9bK9meuoQtlb4gjTZM.P.FutBm.Ffa9AQmHq.','15568505','123456789','Jud_Rey','1');
INSERT INTO public.users(
 id, ap_materno, ap_paterno, dv, email, nombres, password, rut, telefono, username, vigencia_id)
 VALUES (47,'Chavez','Garcia','5','garcia.chavez@gmail.com','Brenda Soraya','$2a$10$FxxMIGNqLDwyJGkB9bK9meuoQtlb4gjTZM.P.FutBm.Ffa9AQmHq.','22655321','147258369','Bre_Gar','1');
INSERT INTO public.users(
 id, ap_materno, ap_paterno, dv, email, nombres, password, rut, telefono, username, vigencia_id)
 VALUES (48,'Marquez','Aguila','0','aguila.marquez@gmail.com','Alma Rosa','$2a$10$FxxMIGNqLDwyJGkB9bK9meuoQtlb4gjTZM.P.FutBm.Ffa9AQmHq.','14594233','987654321','Alm_Agu','1');
INSERT INTO public.users(
 id, ap_materno, ap_paterno, dv, email, nombres, password, rut, telefono, username, vigencia_id)
 VALUES (2,'Naranjo','Gonzalez','7','gonzalez.naranjo@gmail.com','Bere','$2a$10$FxxMIGNqLDwyJGkB9bK9meuoQtlb4gjTZM.P.FutBm.Ffa9AQmHq.','23819261','123456789','Ber_Gon','1');
INSERT INTO public.users(
 id, ap_materno, ap_paterno, dv, email, nombres, password, rut, telefono, username, vigencia_id)
 VALUES (3,'Campos','Naranjo','k','naranjo.campos@gmail.com','Alexis','$2a$10$FxxMIGNqLDwyJGkB9bK9meuoQtlb4gjTZM.P.FutBm.Ffa9AQmHq.','15297227','147258369','Ale_Nar','1');
INSERT INTO public.users(
 id, ap_materno, ap_paterno, dv, email, nombres, password, rut, telefono, username, vigencia_id)
 VALUES (4,'Campos','Hernandez','3','hernandez.campos@gmail.com','Sergio Alejandro','$2a$10$FxxMIGNqLDwyJGkB9bK9meuoQtlb4gjTZM.P.FutBm.Ffa9AQmHq.','7811209','987654321','Ser_Her','1');
INSERT INTO public.users(
 id, ap_materno, ap_paterno, dv, email, nombres, password, rut, telefono, username, vigencia_id)
 VALUES (5,'Berumen','Cedillo','4','cedillo.berumen@gmail.com','Diego Ismael','$2a$10$FxxMIGNqLDwyJGkB9bK9meuoQtlb4gjTZM.P.FutBm.Ffa9AQmHq.','11712587','963852741','Die_Ced','1');
INSERT INTO public.users(
 id, ap_materno, ap_paterno, dv, email, nombres, password, rut, telefono, username, vigencia_id)
 VALUES (6,'Escalante','Palafox','1','palafox.escalante@gmail.com','Aurora','$2a$10$FxxMIGNqLDwyJGkB9bK9meuoQtlb4gjTZM.P.FutBm.Ffa9AQmHq.','5883273','741852963','Aur_Pal','1');
INSERT INTO public.users(
 id, ap_materno, ap_paterno, dv, email, nombres, password, rut, telefono, username, vigencia_id)
 VALUES (7,'Estrada','Barba','2','barba.estrada@gmail.com','Joycelene Fabiola','$2a$10$FxxMIGNqLDwyJGkB9bK9meuoQtlb4gjTZM.P.FutBm.Ffa9AQmHq.','11036496','123456789','Joy_Bar','1');
INSERT INTO public.users(
 id, ap_materno, ap_paterno, dv, email, nombres, password, rut, telefono, username, vigencia_id)
 VALUES (8,'Estrada','Gomez','k','gomez.estrada@gmail.com','Francisco','$2a$10$FxxMIGNqLDwyJGkB9bK9meuoQtlb4gjTZM.P.FutBm.Ffa9AQmHq.','22595142','147258369','Fra_Gom','1');
INSERT INTO public.users(
 id, ap_materno, ap_paterno, dv, email, nombres, password, rut, telefono, username, vigencia_id)
 VALUES (9,'Farias','Rosas','k','rosas.farias@gmail.com','Leonardo Daniel','$2a$10$FxxMIGNqLDwyJGkB9bK9meuoQtlb4gjTZM.P.FutBm.Ffa9AQmHq.','12261526','987654321','Leo_Ros','1');
INSERT INTO public.users(
 id, ap_materno, ap_paterno, dv, email, nombres, password, rut, telefono, username, vigencia_id)
 VALUES (10,'Fierros','Robles','6','robles.fierros@gmail.com','Ramon Andres','$2a$10$FxxMIGNqLDwyJGkB9bK9meuoQtlb4gjTZM.P.FutBm.Ffa9AQmHq.','21318401','963852741','Ram_Rob','1');
INSERT INTO public.users(
 id, ap_materno, ap_paterno, dv, email, nombres, password, rut, telefono, username, vigencia_id)
 VALUES (11,'Flores','Olivares','9','olivares.flores@gmail.com','Edgar Andres','$2a$10$FxxMIGNqLDwyJGkB9bK9meuoQtlb4gjTZM.P.FutBm.Ffa9AQmHq.','23062361','741852963','Edg_Oli','1');
INSERT INTO public.users(
 id, ap_materno, ap_paterno, dv, email, nombres, password, rut, telefono, username, vigencia_id)
 VALUES (12,'Franco','Esquivel','k','esquivel.franco@gmail.com','Maria Fernanda','$2a$10$FxxMIGNqLDwyJGkB9bK9meuoQtlb4gjTZM.P.FutBm.Ffa9AQmHq.','21592520','123456789','Mar_Esq','1');
INSERT INTO public.users(
 id, ap_materno, ap_paterno, dv, email, nombres, password, rut, telefono, username, vigencia_id)
 VALUES (13,'Galvan','Muñiz','9','muñiz.galvan@gmail.com','Alejandro','$2a$10$FxxMIGNqLDwyJGkB9bK9meuoQtlb4gjTZM.P.FutBm.Ffa9AQmHq.','24251722','147258369','Ale_Muñ','1');
INSERT INTO public.users(
 id, ap_materno, ap_paterno, dv, email, nombres, password, rut, telefono, username, vigencia_id)
 VALUES (14,'Gutierrez','Ortiz','3','ortiz.gutierrez@gmail.com','Martha Alicia','$2a$10$FxxMIGNqLDwyJGkB9bK9meuoQtlb4gjTZM.P.FutBm.Ffa9AQmHq.','16621174','987654321','Mar_Ort','1');
INSERT INTO public.users(
 id, ap_materno, ap_paterno, dv, email, nombres, password, rut, telefono, username, vigencia_id)
 VALUES (15,'Hernandez','Saucedo','3','saucedo.hernandez@gmail.com','Josafat Gerardo','$2a$10$FxxMIGNqLDwyJGkB9bK9meuoQtlb4gjTZM.P.FutBm.Ffa9AQmHq.','13383637','963852741','Jos_Sau','1');
INSERT INTO public.users(
 id, ap_materno, ap_paterno, dv, email, nombres, password, rut, telefono, username, vigencia_id)
 VALUES (16,'Jimenez','Gonzalez','0','gonzalez.jimenez@gmail.com','Rosalia','$2a$10$FxxMIGNqLDwyJGkB9bK9meuoQtlb4gjTZM.P.FutBm.Ffa9AQmHq.','19852632','741852963','Ros_Gon','1');
INSERT INTO public.users(
 id, ap_materno, ap_paterno, dv, email, nombres, password, rut, telefono, username, vigencia_id)
 VALUES (17,'Jimenez','Rios','1','rios.jimenez@gmail.com','Laura Celene','$2a$10$FxxMIGNqLDwyJGkB9bK9meuoQtlb4gjTZM.P.FutBm.Ffa9AQmHq.','8309414','123456789','Lau_Rio','1');
INSERT INTO public.users(
 id, ap_materno, ap_paterno, dv, email, nombres, password, rut, telefono, username, vigencia_id)
 VALUES (18,'Lopez','Cortes','9','cortes.lopez@gmail.com','Angelica','$2a$10$FxxMIGNqLDwyJGkB9bK9meuoQtlb4gjTZM.P.FutBm.Ffa9AQmHq.','17536653','147258369','Ang_Cor','1');
INSERT INTO public.users(
 id, ap_materno, ap_paterno, dv, email, nombres, password, rut, telefono, username, vigencia_id)
 VALUES (19,'Lopez','Gomez','3','gomez.lopez@gmail.com','Cristian Ivan','$2a$10$FxxMIGNqLDwyJGkB9bK9meuoQtlb4gjTZM.P.FutBm.Ffa9AQmHq.','17378545','987654321','Cri_Gom','1');
INSERT INTO public.users(
 id, ap_materno, ap_paterno, dv, email, nombres, password, rut, telefono, username, vigencia_id)
 VALUES (20,'Lopez','Meza','7','meza.lopez@gmail.com','Marlene Gabriela','$2a$10$FxxMIGNqLDwyJGkB9bK9meuoQtlb4gjTZM.P.FutBm.Ffa9AQmHq.','11884852','963852741','Mar_Mez','1');
INSERT INTO public.users(
 id, ap_materno, ap_paterno, dv, email, nombres, password, rut, telefono, username, vigencia_id)
 VALUES (21,'Medina','Ibarra','8','ibarra.medina@gmail.com','Alejandra','$2a$10$FxxMIGNqLDwyJGkB9bK9meuoQtlb4gjTZM.P.FutBm.Ffa9AQmHq.','11166242','741852963','Ale_Iba','1');
INSERT INTO public.users(
 id, ap_materno, ap_paterno, dv, email, nombres, password, rut, telefono, username, vigencia_id)
 VALUES (22,'Mejia','Alvarez','0','alvarez.mejia@gmail.com','Consuelo Yuridiana Thalia','$2a$10$FxxMIGNqLDwyJGkB9bK9meuoQtlb4gjTZM.P.FutBm.Ffa9AQmHq.','11189803','123456789','Con_Alv','1');
INSERT INTO public.users(
 id, ap_materno, ap_paterno, dv, email, nombres, password, rut, telefono, username, vigencia_id)
 VALUES (23,'Mejia','Alvarez','2','alvarez.rivera@gmail.com','Javier Adrian','$2a$10$FxxMIGNqLDwyJGkB9bK9meuoQtlb4gjTZM.P.FutBm.Ffa9AQmHq.','14355134','147258369','Jav_Alv','1');
INSERT INTO public.users(
 id, ap_materno, ap_paterno, dv, email, nombres, password, rut, telefono, username, vigencia_id)
 VALUES (24,'Peña','Gutierrez','2','gutierrez.peña@gmail.com','Juan Carlos Evaristo','$2a$10$FxxMIGNqLDwyJGkB9bK9meuoQtlb4gjTZM.P.FutBm.Ffa9AQmHq.','17415005','987654321','Jua_Gut','1');
INSERT INTO public.users(
 id, ap_materno, ap_paterno, dv, email, nombres, password, rut, telefono, username, vigencia_id)
 VALUES (25,'Perez','Velez','2','velez.perez@gmail.com','Jazmin Alejandra','$2a$10$FxxMIGNqLDwyJGkB9bK9meuoQtlb4gjTZM.P.FutBm.Ffa9AQmHq.','12355234','963852741','Jaz_Vel','1');
INSERT INTO public.users(
 id, ap_materno, ap_paterno, dv, email, nombres, password, rut, telefono, username, vigencia_id)
 VALUES (26,'Ramirez','Rivera','6','rivera.ramirez@gmail.com','Gustavo','$2a$10$FxxMIGNqLDwyJGkB9bK9meuoQtlb4gjTZM.P.FutBm.Ffa9AQmHq.','5441565','741852963','Gus_Riv','1');
INSERT INTO public.users(
 id, ap_materno, ap_paterno, dv, email, nombres, password, rut, telefono, username, vigencia_id)
 VALUES (27,'Rodriguez','Ascencio','3','ascencio.rodriguez@gmail.com','Carlos Nivardo','$2a$10$FxxMIGNqLDwyJGkB9bK9meuoQtlb4gjTZM.P.FutBm.Ffa9AQmHq.','7643636','123456789','Car_Asc','1');
INSERT INTO public.users(
 id, ap_materno, ap_paterno, dv, email, nombres, password, rut, telefono, username, vigencia_id)
 VALUES (28,'Romero','Luevanos','6','luevanos.romero@gmail.com','Karla Johana','$2a$10$FxxMIGNqLDwyJGkB9bK9meuoQtlb4gjTZM.P.FutBm.Ffa9AQmHq.','23511371','147258369','Kar_Lue','1');
INSERT INTO public.users(
 id, ap_materno, ap_paterno, dv, email, nombres, password, rut, telefono, username, vigencia_id)
 VALUES (29,'Ruiz','Hernandez','k','hernandez.ruiz@gmail.com','Yessica Yoselinne','$2a$10$FxxMIGNqLDwyJGkB9bK9meuoQtlb4gjTZM.P.FutBm.Ffa9AQmHq.','20915031','987654321','Yes_Her','1');
INSERT INTO public.users(
 id, ap_materno, ap_paterno, dv, email, nombres, password, rut, telefono, username, vigencia_id)
 VALUES (30,'Salas','Sanchez','7','sanchez.salas@gmail.com','Christian Eduardo','$2a$10$FxxMIGNqLDwyJGkB9bK9meuoQtlb4gjTZM.P.FutBm.Ffa9AQmHq.','8816924','963852741','Chr_San','1');
INSERT INTO public.users(
 id, ap_materno, ap_paterno, dv, email, nombres, password, rut, telefono, username, vigencia_id)
 VALUES (31,'Saldaña','Espinoza','9','espinoza.saldaña@gmail.com','Luis Roberto','$2a$10$FxxMIGNqLDwyJGkB9bK9meuoQtlb4gjTZM.P.FutBm.Ffa9AQmHq.','6598680','741852963','Lui_Esp','1');
INSERT INTO public.users(
 id, ap_materno, ap_paterno, dv, email, nombres, password, rut, telefono, username, vigencia_id)
 VALUES (32,'Sanchez','Ortiz','9','ortiz.sanchez@gmail.com','Adrian','$2a$10$FxxMIGNqLDwyJGkB9bK9meuoQtlb4gjTZM.P.FutBm.Ffa9AQmHq.','10408410','123456789','Adr_Ort','1');
INSERT INTO public.users(
 id, ap_materno, ap_paterno, dv, email, nombres, password, rut, telefono, username, vigencia_id)
 VALUES (33,'Suarez','Hernandez','7','hernandez.suarez@gmail.com','Eduardo Yair','$2a$10$FxxMIGNqLDwyJGkB9bK9meuoQtlb4gjTZM.P.FutBm.Ffa9AQmHq.','9933787','147258369','Edu_Her','1');
INSERT INTO public.users(
 id, ap_materno, ap_paterno, dv, email, nombres, password, rut, telefono, username, vigencia_id)
 VALUES (34,'Tabarez','Garcia','1','garcia.tabarez@gmail.com','Juan Francisco','$2a$10$FxxMIGNqLDwyJGkB9bK9meuoQtlb4gjTZM.P.FutBm.Ffa9AQmHq.','17662100','987654321','Jua_Gar','1');
INSERT INTO public.users(
 id, ap_materno, ap_paterno, dv, email, nombres, password, rut, telefono, username, vigencia_id)
 VALUES (35,'Teran','Torres','7','torres.teran@gmail.com','Zuleica Elizabeth','$2a$10$FxxMIGNqLDwyJGkB9bK9meuoQtlb4gjTZM.P.FutBm.Ffa9AQmHq.','23287140','963852741','Zul_Tor','1');
INSERT INTO public.users(
 id, ap_materno, ap_paterno, dv, email, nombres, password, rut, telefono, username, vigencia_id)
 VALUES (36,'Vargas','Ayala','2','ayala.vargas@gmail.com','Adriana Yunuhen','$2a$10$FxxMIGNqLDwyJGkB9bK9meuoQtlb4gjTZM.P.FutBm.Ffa9AQmHq.','12909100','741852963','Adr_Aya','1');
INSERT INTO public.users(
 id, ap_materno, ap_paterno, dv, email, nombres, password, rut, telefono, username, vigencia_id)
 VALUES (37,'Velazquez','Alvarez','3','alvarez.velazquez@gmail.com','Oscar Uriel','$2a$10$FxxMIGNqLDwyJGkB9bK9meuoQtlb4gjTZM.P.FutBm.Ffa9AQmHq.','23087605','123456789','Osc_Alv','1');
INSERT INTO public.users(
 id, ap_materno, ap_paterno, dv, email, nombres, password, rut, telefono, username, vigencia_id)
 VALUES (38,'Corona','Diaz','8','diaz.corona@gmail.com','Erick De Jesus','$2a$10$FxxMIGNqLDwyJGkB9bK9meuoQtlb4gjTZM.P.FutBm.Ffa9AQmHq.','18783596','147258369','Eri_Dia','1');
INSERT INTO public.users(
 id, ap_materno, ap_paterno, dv, email, nombres, password, rut, telefono, username, vigencia_id)
 VALUES (39,'Ramos','Hernandez','2','hernandez.ramos@gmail.com','Maria Guadalupe','$2a$10$FxxMIGNqLDwyJGkB9bK9meuoQtlb4gjTZM.P.FutBm.Ffa9AQmHq.','7473772','987654321','Mar_Her','1');
INSERT INTO public.users(
 id, ap_materno, ap_paterno, dv, email, nombres, password, rut, telefono, username, vigencia_id)
 VALUES (40,'Jimenez','Ventura','7','ventura.jimenez@gmail.com','Jessica Noemi','$2a$10$FxxMIGNqLDwyJGkB9bK9meuoQtlb4gjTZM.P.FutBm.Ffa9AQmHq.','23250623','963852741','Jes_Ven','1');
INSERT INTO public.users(
 id, ap_materno, ap_paterno, dv, email, nombres, password, rut, telefono, username, vigencia_id)
 VALUES (41,'Rojas','Hernandez','3','hernandez.rojas@gmail.com','Flor Margarita','$2a$10$FxxMIGNqLDwyJGkB9bK9meuoQtlb4gjTZM.P.FutBm.Ffa9AQmHq.','9782453','741852963','Flo_Her','1');
INSERT INTO public.users(
 id, ap_materno, ap_paterno, dv, email, nombres, password, rut, telefono, username, vigencia_id)
 VALUES (42,'Alvarado','Valencia','7','valencia.alvarado@gmail.com','Luis Antonio','$2a$10$FxxMIGNqLDwyJGkB9bK9meuoQtlb4gjTZM.P.FutBm.Ffa9AQmHq.','24625523','741852963','Lui_Val','1');
INSERT INTO public.users(
 id, ap_materno, ap_paterno, dv, email, nombres, password, rut, telefono, username, vigencia_id)
 VALUES (43,'Aguilar','Padilla','7','padilla.aguilar@gmail.com','Edgar Ivan','$2a$10$FxxMIGNqLDwyJGkB9bK9meuoQtlb4gjTZM.P.FutBm.Ffa9AQmHq.','21295340','123456789','Edg_Pad','1');
INSERT INTO public.users(
 id, ap_materno, ap_paterno, dv, email, nombres, password, rut, telefono, username, vigencia_id)
 VALUES (44,'Michel','Sanchez','k','sanchez.michel@gmail.com','Luis Alfonso','$2a$10$FxxMIGNqLDwyJGkB9bK9meuoQtlb4gjTZM.P.FutBm.Ffa9AQmHq.','19526144','147258369','Lui_San','1');
INSERT INTO public.users(
 id, ap_materno, ap_paterno, dv, email, nombres, password, rut, telefono, username, vigencia_id)
 VALUES (45,'Silva','Rocha','6','rocha.silva@gmail.com','Jose Carlos','$2a$10$FxxMIGNqLDwyJGkB9bK9meuoQtlb4gjTZM.P.FutBm.Ffa9AQmHq.','12267068','987654321','Jos_Roc','1');
INSERT INTO public.users(
 id, ap_materno, ap_paterno, dv, email, nombres, password, rut, telefono, username, vigencia_id)
 VALUES (46,'Rodriguez','Reyes','0','reyes.rodriguez@gmail.com','Judith','$2a$10$FxxMIGNqLDwyJGkB9bK9meuoQtlb4gjTZM.P.FutBm.Ffa9AQmHq.','15568505','123456789','Jud_Rey','1');
INSERT INTO public.users(
 id, ap_materno, ap_paterno, dv, email, nombres, password, rut, telefono, username, vigencia_id)
 VALUES (47,'Chavez','Garcia','5','garcia.chavez@gmail.com','Brenda Soraya','$2a$10$FxxMIGNqLDwyJGkB9bK9meuoQtlb4gjTZM.P.FutBm.Ffa9AQmHq.','22655321','147258369','Bre_Gar','1');
INSERT INTO public.users(
 id, ap_materno, ap_paterno, dv, email, nombres, password, rut, telefono, username, vigencia_id)
 VALUES (48,'Marquez','Aguila','0','aguila.marquez@gmail.com','Alma Rosa','$2a$10$FxxMIGNqLDwyJGkB9bK9meuoQtlb4gjTZM.P.FutBm.Ffa9AQmHq.','14594233','987654321','Alm_Agu','1');
