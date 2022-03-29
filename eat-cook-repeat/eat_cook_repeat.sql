--
-- PostgreSQL database dump
--

-- Dumped from database version 14.2
-- Dumped by pg_dump version 14.2

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: recipe_comments; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.recipe_comments (
    id integer NOT NULL,
    user_id integer NOT NULL,
    recipe_id integer NOT NULL,
    recipe_comment text NOT NULL,
    created_date date DEFAULT CURRENT_DATE
);


ALTER TABLE public.recipe_comments OWNER TO postgres;

--
-- Name: recipe_comments_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.recipe_comments_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.recipe_comments_id_seq OWNER TO postgres;

--
-- Name: recipe_comments_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.recipe_comments_id_seq OWNED BY public.recipe_comments.id;


--
-- Name: recipes; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.recipes (
    id integer NOT NULL,
    user_id integer,
    recipe_image_link character varying(255) NOT NULL,
    title character varying(100) NOT NULL,
    ingredients text NOT NULL,
    how_to_cook text NOT NULL,
    recipe_video_link character varying(255) NOT NULL,
    created_date date DEFAULT CURRENT_DATE
);


ALTER TABLE public.recipes OWNER TO postgres;

--
-- Name: recipes_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.recipes_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.recipes_id_seq OWNER TO postgres;

--
-- Name: recipes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.recipes_id_seq OWNED BY public.recipes.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    email character varying(100) NOT NULL,
    phone_number character varying(100) NOT NULL,
    password character varying(100) NOT NULL
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: recipe_comments id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.recipe_comments ALTER COLUMN id SET DEFAULT nextval('public.recipe_comments_id_seq'::regclass);


--
-- Name: recipes id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.recipes ALTER COLUMN id SET DEFAULT nextval('public.recipes_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: recipe_comments; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.recipe_comments (id, user_id, recipe_id, recipe_comment, created_date) FROM stdin;
1	6	3	Recommended. Nggak kalah dengan yang di abang-abang resepnya	2022-03-25
2	1	3	So simple, tapi komplit banget lauk suwirannya.	2022-03-25
3	8	2	Semakin rame rasanya dilengkapi emping melinjo, daging tetelan dan risol bihun	2022-03-25
\.


--
-- Data for Name: recipes; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.recipes (id, user_id, recipe_image_link, title, ingredients, how_to_cook, recipe_video_link, created_date) FROM stdin;
1	5	https://asset.kompas.com/crops/GlcvKj58gRTIQ6P5CudHWp3phZI=/0x0:698x465/750x500/data/photo/2022/01/10/61dbc4076c2b3.jpg	Soto Ayam Sederhana	ayam, kubis, bihun jagung, daun bawang, daun seledri, tomat, cabai, telur rebus, jeruk nipis	https://www.suara.com/lifestyle/2020/09/22/143850/resep-soto-ayam-sederhana-yang-lezat?page=all	https://www.youtube.com/watch?v=5Kauhbzc5K4	2022-03-25
2	2	https://img-global.cpcdn.com/recipes/0bab0a15c3ff7104/640x640sq70/photo.webp	Soto Mie Asli Bogor	daging sapi, kikil, bawang putih, bawang merah, serai, lengkuas, jahe	https://resepkoki.id/resep/resep-soto-mie-bogor/	https://www.youtube.com/watch?v=_1q0ZkdY7qU	2022-03-25
3	8	https://i0.wp.com/resepkoki.id/wp-content/uploads/2016/10/Resep-Nasgor-Gila.jpg?fit=500%2C484&ssl=1	Nasi Goreng Gila	nasi putih, sosis, telur, bakso, bawang putih, bawang merah, daun bawang	https://www.kompas.com/food/read/2020/10/03/071700575/resep-nasi-goreng-gila-pakai-nasi-sisa-semalam?page=all	https://www.youtube.com/watch?v=HWozfMqECoo	2022-03-25
4	4	https://i0.wp.com/resepkoki.id/wp-content/uploads/2017/03/Resep-Nasi-Kebuli.jpg?fit=500%2C645&ssl=1	Nasi Kebuli Kambing	beras, daging kambing, air panas, kismis, minyak samin, pala bubuk, kapulaga, cengkeh, kayu manis, serai	https://www.happyfresh.id/blog/resep/nasi-kebuli-kambing-arab-betawi/	https://www.youtube.com/watch?v=Q63TB00ukX0	2022-03-26
5	6	https://www.tehpucukharum.com/wp-content/uploads/2016/02/Yuk-Coba-Bikin-Sop-Buntut-Ala-Hotel-Borobudur.jpg	Sop Buntut Borobudur	buntut sapi, garam, air, jahe, minyak goreng, kentang, wortel, tomat, daun bawang, seledri, garam	https://www.kompas.com/food/read/2020/06/17/181200375/resep-sop-buntut-ala-hotel-bintang-5-coba-yuk?page=all	https://www.youtube.com/watch?v=cEF_pJNfdBM	2022-03-26
6	3	https://i0.wp.com/resepkoki.id/wp-content/uploads/2017/02/Resep-Pindang-Patin.jpg?fit=500%2C455&ssl=1	Pindang Patin	ikan patin ukuran sedang, air jeruk nipis, air, tomat, cabai rawit, garam	https://www.kompas.com/food/read/2020/08/09/080800375/resep-pindang-ikan-patin-khas-jambi-bumbu-yang-dipakai-cukup-diiris	https://www.youtube.com/watch?v=-zxI9Yv6H4E	2022-03-26
7	5	https://asset.kompas.com/crops/5KYhB1YOQmFJcXfdqwalLRnoGxQ=/13x68:985x716/750x500/data/photo/2021/05/22/60a8bfb2021eb.jpg	Bakmi Rebus Khas Jogja	mie kuning, dada ayam rebus/goreng, sawi hijau, kol, tomat merah, kaldu ayam, telur ayam	https://resepkoki.id/resep/resep-mie-godog-jawa-mie-rebus-jawa/	https://www.youtube.com/watch?v=xOKO2wNJkQ0	2022-03-28
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, name, email, phone_number, password) FROM stdin;
1	David Susanto	david@abc.com	085812874430	$2b$10$ET9PRrw3iUPqsI9cVWcgu.UrSiI7xENMU/fM5oc3jJeTCNUhTlET.
2	Laras Sukmawati	laras@abc.com	081291193410	$2b$10$Fw9IsIrRyHdjR..Jdcz71.53VUfARG1TL6eWn2dXFXJZaqO1VTD12
3	Dadang Suryawan	dangSur@abc.com	081128271933	$2b$10$wRiSQdz5o86oHJCCOtwnxO6PIeTMQx9EjhyxcoIhsTKfQ49K0oA8u
4	Albert Dominggus	albert@abc.com	081212920282	$2b$10$k./MaVz9Lvv0/B5HUtS/Jubs9SF4jrKI5Gaq3GKcKtvFqU8p5k0Ly
5	Syahrul Wibowo	bowo@abc.com	083318923014	$2b$10$NGz6vdycDzY4TUjag2//QuEp8CRAF8T1A0C7wcfQ2sRuvKuHdUHzC
6	Danang Ahmadi	danang@abc.com	088812139300	$2b$10$aNwrT0Y5ETfGN6t/OFOanu8bWTvA7Sg.2SngUbo6/d7xtchjDEpNa
7	Wahyu Syahputra	wahyu_s@abc.com	081233981476	$2b$10$lp1lMuSYvtTIarMqYSVavuGdcUP4RmXfMTKxcOzR4JaNGCQ0m/.bW
8	Angga Sudarwanto	angga_s@abc.com	081249501132	$2b$10$NIbX99BFK6anu1AFYkJDmej5gijCmLRFvsRmYILRR36O/KO5juT7S
9	Daud Sulaiman	daud@abc.com	081391828201	$2b$10$kUZceNuVT9puYuHXbNkxmOvtdiU8.sgCRwQ45eFPjqqB2mvBu0Dk6
10	Jajang Sukmana	jajang@abc.com	085623029451	$2b$10$9oXa0fuzMCkZmCpwM/NgLeABn12bs4BYq5te.qYCOPdmLQEMGhSCa
11	Supriyanto	supriyanto@abc.com	089843206233	$2b$10$yP7XtBCKhmBAwi0xOV.PaecTeRNFp5SKTBQ/3bLb8qQ8jXieOYgpu
\.


--
-- Name: recipe_comments_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.recipe_comments_id_seq', 4, true);


--
-- Name: recipes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.recipes_id_seq', 7, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 11, true);


--
-- Name: recipe_comments recipe_comments_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.recipe_comments
    ADD CONSTRAINT recipe_comments_pkey PRIMARY KEY (id);


--
-- Name: recipes recipes_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.recipes
    ADD CONSTRAINT recipes_pkey PRIMARY KEY (id);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_phone_number_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_phone_number_key UNIQUE (phone_number);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: recipe_comments recipe_comments_recipe_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.recipe_comments
    ADD CONSTRAINT recipe_comments_recipe_id_fkey FOREIGN KEY (recipe_id) REFERENCES public.recipes(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: recipe_comments recipe_comments_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.recipe_comments
    ADD CONSTRAINT recipe_comments_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: recipes recipes_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.recipes
    ADD CONSTRAINT recipes_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- PostgreSQL database dump complete
--

