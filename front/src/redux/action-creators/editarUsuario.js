import { EDIT_PERFIL } from "../constants";
import axios from "axios";

const nuevoPerfil = user => ({
  type: EDIT_PERFIL,
  user
});

//registra un user en localhost:3001
