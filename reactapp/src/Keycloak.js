import Keycloak from "keycloak-js";
const keycloak = new Keycloak({
    url: "https://129.146.141.93:8182",
    realm: "NC",
    clientId: "s9",
});

export default keycloak;