import { DriversService } from "./modules/driversService";
import { ProgrammersService } from "./modules/programmersService";
import form from "./modules/form";
import table from "./modules/table";

window.programmersService = new ProgrammersService();
window.driversService = new DriversService();

form();
table();