import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import styled from "styled-components";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from '../Router/index'
import MenuItem from '@material-ui/core/MenuItem'
import { getTrips } from '../../actions/tripActions'
import Select from '@material-ui/core/Select';

const applicationForm = [
    {
        name: 'Nome',
        type: 'text',
        label: 'Nome',
        required: true,
        pattern: "[A-Za-z]{3,}"
    },
    {
        name: 'Idade',
        type: 'number',
        label: 'Idade',
        required: true,
        pattern: "[18-120]"
    },
    {
        name: 'applicationText',
        type: 'text',
        label: 'Porque estou aplicando',
        required: true,
        pattern: "[A-Za-z]{30,}"
    },
    {
        name: 'profissão',
        type: 'text',
        label: 'Profissão',
        required: true,
        pattern: "[A-Za-z]{10,}"
    },
]

const AppFormWrapper = styled.form`
  width: 100%;
  height: 100vh;
  gap: 10px;
  place-content: center;
  justify-items: center;
  display: grid;
`;

const StyledDropDown = styled(TextField)`
width: 185px;
`
const StyledSelect = styled(Select)`
width: 185px;
`
class AppForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            form: {},
            value: "",
            valueTrip: "",
        }
    }

    componentDidMount() {
        this.props.fetchTrips()
    }

    onHandleChangeCountry = (event) => {
        this.setState({ value: event.target.value })
    }

    onHandleChangeTrip = (event) => {
        this.setState({ valueTrip: event.target.value })
    }

    render() {
        return (
            <AppFormWrapper>
                <h1>Aplique aqui para sua viagem!</h1>
                {applicationForm.map(input => (
                    <TextField
                        name={input.name}
                        type={input.type}
                        label={input.label}
                        required={input.required}
                        pattern={input.pattern}
                    />
                ))}
                <StyledDropDown
                    select
                    onChange={this.onHandleChangeCountry}
                    label="paises"
                    name="paises"
                    value={this.state.value}
                    required="true"
                >
                    <MenuItem value="Brasil" selected="selected">Brasil</MenuItem>
                    <MenuItem value="Afeganistão">Afeganistão</MenuItem>
                    <MenuItem value="África do Sul">África do Sul</MenuItem>
                    <MenuItem value="Albânia">Albânia</MenuItem>
                    <MenuItem value="Alemanha">Alemanha</MenuItem>
                    <MenuItem value="Andorra">Andorra</MenuItem>
                    <MenuItem value="Angola">Angola</MenuItem>
                    <MenuItem value="Anguilla">Anguilla</MenuItem>
                    <MenuItem value="Antilhas Holandesas">Antilhas Holandesas</MenuItem>
                    <MenuItem value="Antárctida">Antárctida</MenuItem>
                    <MenuItem value="Antígua e Barbuda">Antígua e Barbuda</MenuItem>
                    <MenuItem value="Argentina">Argentina</MenuItem>
                    <MenuItem value="Argélia">Argélia</MenuItem>
                    <MenuItem value="Armênia">Armênia</MenuItem>
                    <MenuItem value="Aruba">Aruba</MenuItem>
                    <MenuItem value="Arábia Saudita">Arábia Saudita</MenuItem>
                    <MenuItem value="Austrália">Austrália</MenuItem>
                    <MenuItem value="Áustria">Áustria</MenuItem>
                    <MenuItem value="Azerbaijão">Azerbaijão</MenuItem>
                    <MenuItem value="Bahamas">Bahamas</MenuItem>
                    <MenuItem value="Bahrein">Bahrein</MenuItem>
                    <MenuItem value="Bangladesh">Bangladesh</MenuItem>
                    <MenuItem value="Barbados">Barbados</MenuItem>
                    <MenuItem value="Belize">Belize</MenuItem>
                    <MenuItem value="Benim">Benim</MenuItem>
                    <MenuItem value="Bermudas">Bermudas</MenuItem>
                    <MenuItem value="Bielorrússia">Bielorrússia</MenuItem>
                    <MenuItem value="Bolívia">Bolívia</MenuItem>
                    <MenuItem value="Botswana">Botswana</MenuItem>
                    <MenuItem value="Brunei">Brunei</MenuItem>
                    <MenuItem value="Bulgária">Bulgária</MenuItem>
                    <MenuItem value="Burkina Faso">Burkina Faso</MenuItem>
                    <MenuItem value="Burundi">Burundi</MenuItem>
                    <MenuItem value="Butão">Butão</MenuItem>
                    <MenuItem value="Bélgica">Bélgica</MenuItem>
                    <MenuItem value="Bósnia e Herzegovina">Bósnia e Herzegovina</MenuItem>
                    <MenuItem value="Cabo Verde">Cabo Verde</MenuItem>
                    <MenuItem value="Camarões">Camarões</MenuItem>
                    <MenuItem value="Camboja">Camboja</MenuItem>
                    <MenuItem value="Canadá">Canadá</MenuItem>
                    <MenuItem value="Catar">Catar</MenuItem>
                    <MenuItem value="Cazaquistão">Cazaquistão</MenuItem>
                    <MenuItem value="Chade">Chade</MenuItem>
                    <MenuItem value="Chile">Chile</MenuItem>
                    <MenuItem value="China">China</MenuItem>
                    <MenuItem value="Chipre">Chipre</MenuItem>
                    <MenuItem value="Colômbia">Colômbia</MenuItem>
                    <MenuItem value="Comores">Comores</MenuItem>
                    <MenuItem value="Coreia do Norte">Coreia do Norte</MenuItem>
                    <MenuItem value="Coreia do Sul">Coreia do Sul</MenuItem>
                    <MenuItem value="Costa do Marfim">Costa do Marfim</MenuItem>
                    <MenuItem value="Costa Rica">Costa Rica</MenuItem>
                    <MenuItem value="Croácia">Croácia</MenuItem>
                    <MenuItem value="Cuba">Cuba</MenuItem>
                    <MenuItem value="Dinamarca">Dinamarca</MenuItem>
                    <MenuItem value="Djibouti">Djibouti</MenuItem>
                    <MenuItem value="Dominica">Dominica</MenuItem>
                    <MenuItem value="Egito">Egito</MenuItem>
                    <MenuItem value="El Salvador">El Salvador</MenuItem>
                    <MenuItem value="Emirados Árabes Unidos">Emirados Árabes Unidos</MenuItem>
                    <MenuItem value="Equador">Equador</MenuItem>
                    <MenuItem value="Eritreia">Eritreia</MenuItem>
                    <MenuItem value="Escócia">Escócia</MenuItem>
                    <MenuItem value="Eslováquia">Eslováquia</MenuItem>
                    <MenuItem value="Eslovênia">Eslovênia</MenuItem>
                    <MenuItem value="Espanha">Espanha</MenuItem>
                    <MenuItem value="Estados Federados da Micronésia">Estados Federados da Micronésia</MenuItem>
                    <MenuItem value="Estados Unidos">Estados Unidos</MenuItem>
                    <MenuItem value="Estônia">Estônia</MenuItem>
                    <MenuItem value="Etiópia">Etiópia</MenuItem>
                    <MenuItem value="Fiji">Fiji</MenuItem>
                    <MenuItem value="Filipinas">Filipinas</MenuItem>
                    <MenuItem value="Finlândia">Finlândia</MenuItem>
                    <MenuItem value="França">França</MenuItem>
                    <MenuItem value="Gabão">Gabão</MenuItem>
                    <MenuItem value="Gana">Gana</MenuItem>
                    <MenuItem value="Geórgia">Geórgia</MenuItem>
                    <MenuItem value="Gibraltar">Gibraltar</MenuItem>
                    <MenuItem value="Granada">Granada</MenuItem>
                    <MenuItem value="Gronelândia">Gronelândia</MenuItem>
                    <MenuItem value="Grécia">Grécia</MenuItem>
                    <MenuItem value="Guadalupe">Guadalupe</MenuItem>
                    <MenuItem value="Guam">Guam</MenuItem>
                    <MenuItem value="Guatemala">Guatemala</MenuItem>
                    <MenuItem value="Guernesei">Guernesei</MenuItem>
                    <MenuItem value="Guiana">Guiana</MenuItem>
                    <MenuItem value="Guiana Francesa">Guiana Francesa</MenuItem>
                    <MenuItem value="Guiné">Guiné</MenuItem>
                    <MenuItem value="Guiné Equatorial">Guiné Equatorial</MenuItem>
                    <MenuItem value="Guiné-Bissau">Guiné-Bissau</MenuItem>
                    <MenuItem value="Gâmbia">Gâmbia</MenuItem>
                    <MenuItem value="Haiti">Haiti</MenuItem>
                    <MenuItem value="Honduras">Honduras</MenuItem>
                    <MenuItem value="Hong Kong">Hong Kong</MenuItem>
                    <MenuItem value="Hungria">Hungria</MenuItem>
                    <MenuItem value="Ilha Bouvet">Ilha Bouvet</MenuItem>
                    <MenuItem value="Ilha de Man">Ilha de Man</MenuItem>
                    <MenuItem value="Ilha do Natal">Ilha do Natal</MenuItem>
                    <MenuItem value="Ilha Heard e Ilhas McDonald">Ilha Heard e Ilhas McDonald</MenuItem>
                    <MenuItem value="Ilha Norfolk">Ilha Norfolk</MenuItem>
                    <MenuItem value="Ilhas Cayman">Ilhas Cayman</MenuItem>
                    <MenuItem value="Ilhas Cocos (Keeling)">Ilhas Cocos (Keeling)</MenuItem>
                    <MenuItem value="Ilhas Cook">Ilhas Cook</MenuItem>
                    <MenuItem value="Ilhas Feroé">Ilhas Feroé</MenuItem>
                    <MenuItem value="Ilhas Geórgia do Sul e Sandwich do Sul">Ilhas Geórgia do Sul e Sandwich do Sul</MenuItem>
                    <MenuItem value="Ilhas Malvinas">Ilhas Malvinas</MenuItem>
                    <MenuItem value="Ilhas Marshall">Ilhas Marshall</MenuItem>
                    <MenuItem value="Ilhas Menores Distantes dos Estados Unidos">Ilhas Menores Distantes dos Estados Unidos</MenuItem>
                    <MenuItem value="Ilhas Salomão">Ilhas Salomão</MenuItem>
                    <MenuItem value="Ilhas Virgens Americanas">Ilhas Virgens Americanas</MenuItem>
                    <MenuItem value="Ilhas Virgens Britânicas">Ilhas Virgens Britânicas</MenuItem>
                    <MenuItem value="Ilhas Åland">Ilhas Åland</MenuItem>
                    <MenuItem value="Indonésia">Indonésia</MenuItem>
                    <MenuItem value="Inglaterra">Inglaterra</MenuItem>
                    <MenuItem value="Índia">Índia</MenuItem>
                    <MenuItem value="Iraque">Iraque</MenuItem>
                    <MenuItem value="Irlanda do Norte">Irlanda do Norte</MenuItem>
                    <MenuItem value="Irlanda">Irlanda</MenuItem>
                    <MenuItem value="Irã">Irã</MenuItem>
                    <MenuItem value="Islândia">Islândia</MenuItem>
                    <MenuItem value="Israel">Israel</MenuItem>
                    <MenuItem value="Itália">Itália</MenuItem>
                    <MenuItem value="Iêmen">Iêmen</MenuItem>
                    <MenuItem value="Jamaica">Jamaica</MenuItem>
                    <MenuItem value="Japão">Japão</MenuItem>
                    <MenuItem value="Jersey">Jersey</MenuItem>
                    <MenuItem value="Jordânia">Jordânia</MenuItem>
                    <MenuItem value="Kiribati">Kiribati</MenuItem>
                    <MenuItem value="Kuwait">Kuwait</MenuItem>
                    <MenuItem value="Laos">Laos</MenuItem>
                    <MenuItem value="Lesoto">Lesoto</MenuItem>
                    <MenuItem value="Letônia">Letônia</MenuItem>
                    <MenuItem value="Libéria">Libéria</MenuItem>
                    <MenuItem value="Liechtenstein">Liechtenstein</MenuItem>
                    <MenuItem value="Lituânia">Lituânia</MenuItem>
                    <MenuItem value="Luxemburgo">Luxemburgo</MenuItem>
                    <MenuItem value="Líbano">Líbano</MenuItem>
                    <MenuItem value="Líbia">Líbia</MenuItem>
                    <MenuItem value="Macau">Macau</MenuItem>
                    <MenuItem value="Macedônia">Macedônia</MenuItem>
                    <MenuItem value="Madagáscar">Madagáscar</MenuItem>
                    <MenuItem value="Malawi">Malawi</MenuItem>
                    <MenuItem value="Maldivas">Maldivas</MenuItem>
                    <MenuItem value="Mali">Mali</MenuItem>
                    <MenuItem value="Malta">Malta</MenuItem>
                    <MenuItem value="Malásia">Malásia</MenuItem>
                    <MenuItem value="Marianas Setentrionais">Marianas Setentrionais</MenuItem>
                    <MenuItem value="Marrocos">Marrocos</MenuItem>
                    <MenuItem value="Martinica">Martinica</MenuItem>
                    <MenuItem value="Mauritânia">Mauritânia</MenuItem>
                    <MenuItem value="Maurícia">Maurícia</MenuItem>
                    <MenuItem value="Mayotte">Mayotte</MenuItem>
                    <MenuItem value="Moldávia">Moldávia</MenuItem>
                    <MenuItem value="Mongólia">Mongólia</MenuItem>
                    <MenuItem value="Montenegro">Montenegro</MenuItem>
                    <MenuItem value="Montserrat">Montserrat</MenuItem>
                    <MenuItem value="Moçambique">Moçambique</MenuItem>
                    <MenuItem value="Myanmar">Myanmar</MenuItem>
                    <MenuItem value="México">México</MenuItem>
                    <MenuItem value="Mônaco">Mônaco</MenuItem>
                    <MenuItem value="Namíbia">Namíbia</MenuItem>
                    <MenuItem value="Nauru">Nauru</MenuItem>
                    <MenuItem value="Nepal">Nepal</MenuItem>
                    <MenuItem value="Nicarágua">Nicarágua</MenuItem>
                    <MenuItem value="Nigéria">Nigéria</MenuItem>
                    <MenuItem value="Niue">Niue</MenuItem>
                    <MenuItem value="Noruega">Noruega</MenuItem>
                    <MenuItem value="Nova Caledônia">Nova Caledônia</MenuItem>
                    <MenuItem value="Nova Zelândia">Nova Zelândia</MenuItem>
                    <MenuItem value="Níger">Níger</MenuItem>
                    <MenuItem value="Omã">Omã</MenuItem>
                    <MenuItem value="Palau">Palau</MenuItem>
                    <MenuItem value="Palestina">Palestina</MenuItem>
                    <MenuItem value="Panamá">Panamá</MenuItem>
                    <MenuItem value="Papua-Nova Guiné">Papua-Nova Guiné</MenuItem>
                    <MenuItem value="Paquistão">Paquistão</MenuItem>
                    <MenuItem value="Paraguai">Paraguai</MenuItem>
                    <MenuItem value="País de Gales">País de Gales</MenuItem>
                    <MenuItem value="Países Baixos">Países Baixos</MenuItem>
                    <MenuItem value="Peru">Peru</MenuItem>
                    <MenuItem value="Pitcairn">Pitcairn</MenuItem>
                    <MenuItem value="Polinésia Francesa">Polinésia Francesa</MenuItem>
                    <MenuItem value="Polônia">Polônia</MenuItem>
                    <MenuItem value="Porto Rico">Porto Rico</MenuItem>
                    <MenuItem value="Portugal">Portugal</MenuItem>
                    <MenuItem value="Quirguistão">Quirguistão</MenuItem>
                    <MenuItem value="Quênia">Quênia</MenuItem>
                    <MenuItem value="Reino Unido">Reino Unido</MenuItem>
                    <MenuItem value="República Centro-Africana">República Centro-Africana</MenuItem>
                    <MenuItem value="República Checa">República Checa</MenuItem>
                    <MenuItem value="República Democrática do Congo">República Democrática do Congo</MenuItem>
                    <MenuItem value="República do Congo">República do Congo</MenuItem>
                    <MenuItem value="República Dominicana">República Dominicana</MenuItem>
                    <MenuItem value="Reunião">Reunião</MenuItem>
                    <MenuItem value="Romênia">Romênia</MenuItem>
                    <MenuItem value="Ruanda">Ruanda</MenuItem>
                    <MenuItem value="Rússia">Rússia</MenuItem>
                    <MenuItem value="Saara Ocidental">Saara Ocidental</MenuItem>
                    <MenuItem value="Saint Martin">Saint Martin</MenuItem>
                    <MenuItem value="Saint-Barthélemy">Saint-Barthélemy</MenuItem>
                    <MenuItem value="Saint-Pierre e Miquelon">Saint-Pierre e Miquelon</MenuItem>
                    <MenuItem value="Samoa Americana">Samoa Americana</MenuItem>
                    <MenuItem value="Samoa">Samoa</MenuItem>
                    <MenuItem value="Santa Helena, Ascensão e Tristão da Cunha">Santa Helena, Ascensão e Tristão da Cunha</MenuItem>
                    <MenuItem value="Santa Lúcia">Santa Lúcia</MenuItem>
                    <MenuItem value="Senegal">Senegal</MenuItem>
                    <MenuItem value="Serra Leoa">Serra Leoa</MenuItem>
                    <MenuItem value="Seychelles">Seychelles</MenuItem>
                    <MenuItem value="Singapura">Singapura</MenuItem>
                    <MenuItem value="Somália">Somália</MenuItem>
                    <MenuItem value="Sri Lanka">Sri Lanka</MenuItem>
                    <MenuItem value="Suazilândia">Suazilândia</MenuItem>
                    <MenuItem value="Sudão">Sudão</MenuItem>
                    <MenuItem value="Suriname">Suriname</MenuItem>
                    <MenuItem value="Suécia">Suécia</MenuItem>
                    <MenuItem value="Suíça">Suíça</MenuItem>
                    <MenuItem value="Svalbard e Jan Mayen">Svalbard e Jan Mayen</MenuItem>
                    <MenuItem value="São Cristóvão e Nevis">São Cristóvão e Nevis</MenuItem>
                    <MenuItem value="São Marino">São Marino</MenuItem>
                    <MenuItem value="São Tomé e Príncipe">São Tomé e Príncipe</MenuItem>
                    <MenuItem value="São Vicente e Granadinas">São Vicente e Granadinas</MenuItem>
                    <MenuItem value="Sérvia">Sérvia</MenuItem>
                    <MenuItem value="Síria">Síria</MenuItem>
                    <MenuItem value="Tadjiquistão">Tadjiquistão</MenuItem>
                    <MenuItem value="Tailândia">Tailândia</MenuItem>
                    <MenuItem value="Taiwan">Taiwan</MenuItem>
                    <MenuItem value="Tanzânia">Tanzânia</MenuItem>
                    <MenuItem value="Terras Austrais e Antárticas Francesas">Terras Austrais e Antárticas Francesas</MenuItem>
                    <MenuItem value="Território Britânico do Oceano Índico">Território Britânico do Oceano Índico</MenuItem>
                    <MenuItem value="Timor-Leste">Timor-Leste</MenuItem>
                    <MenuItem value="Togo">Togo</MenuItem>
                    <MenuItem value="Tonga">Tonga</MenuItem>
                    <MenuItem value="Toquelau">Toquelau</MenuItem>
                    <MenuItem value="Trinidad e Tobago">Trinidad e Tobago</MenuItem>
                    <MenuItem value="Tunísia">Tunísia</MenuItem>
                    <MenuItem value="Turcas e Caicos">Turcas e Caicos</MenuItem>
                    <MenuItem value="Turquemenistão">Turquemenistão</MenuItem>
                    <MenuItem value="Turquia">Turquia</MenuItem>
                    <MenuItem value="Tuvalu">Tuvalu</MenuItem>
                    <MenuItem value="Ucrânia">Ucrânia</MenuItem>
                    <MenuItem value="Uganda">Uganda</MenuItem>
                    <MenuItem value="Uruguai">Uruguai</MenuItem>
                    <MenuItem value="Uzbequistão">Uzbequistão</MenuItem>
                    <MenuItem value="Vanuatu">Vanuatu</MenuItem>
                    <MenuItem value="Vaticano">Vaticano</MenuItem>
                    <MenuItem value="Venezuela">Venezuela</MenuItem>
                    <MenuItem value="Vietname">Vietname</MenuItem>
                    <MenuItem value="Wallis e Futuna">Wallis e Futuna</MenuItem>
                    <MenuItem value="Zimbabwe">Zimbabwe</MenuItem>
                    <MenuItem value="Zâmbia">Zâmbia</MenuItem>
                </StyledDropDown>
                <StyledSelect
                    label="Viagem"
                    name="Viagem"
                    onChange={this.onHandleChangeTrip}
                    required="true"
                    value={this.state.valueTrip}
                >
                    {this.props.trips.map((trip) => (<MenuItem value={trip.id}>{trip.name} - {trip.planet}</MenuItem>))}
                </StyledSelect>
                <Button>Salvar</Button>
            </AppFormWrapper>
        )
    }
}

const mapStateToProps = state => ({
    trips: state.trips.allTrips
}
);

function mapDispatchToProps(dispatch) {
    return {
        fetchTrips: () => dispatch(getTrips())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppForm) 