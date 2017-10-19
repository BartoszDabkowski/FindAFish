using System.Collections.Generic;
using System.Security.Claims;
using IdentityServer4.Models;
using IdentityServer4.Test;
using IdentityServer4;

namespace FindAFish {
    public static class Config {
        public static List<TestUser> GetUsers() => new List<TestUser>{
            new TestUser(){
                SubjectId = "d860efca-22d9-47fd-8249-791ba61b07c7",
                Username = "John",
                Password = "password",
                Claims = new List<Claim>
                {
                    new Claim("first_name", "John"),
                    new Claim("last_name", "Doe")
                }
            },
            new TestUser(){
                SubjectId = "b7539694-97e7-4dfe-84da-b4256e1ff5c7",
                Username = "Sally",
                Password = "password",
                Claims = new List<Claim>
                {
                    new Claim("first_name", "Sally"),
                    new Claim("last_name", "Mae")
                }
            }
        };
        public static IEnumerable<IdentityResource> GetIdentityResources() => new List<IdentityResource>{
            new IdentityResources.OpenId(),
            new IdentityResources.Profile()
        };

        public static IEnumerable<Client> GetClients(){
            return new List<Client>(){
                new Client{
                    ClientName = "FindAFish",
                    ClientId = "findafishclient",
                    AllowedGrantTypes = GrantTypes.Implicit,
                    RedirectUris = new List<string>(){
                        "https://localhost:44364/signin-oidc"
                    },
                    AllowedScopes =
                    {
                        IdentityServerConstants.StandardScopes.OpenId,
                        IdentityServerConstants.StandardScopes.Profile
                    }
                }
            };
        } 
    }
}