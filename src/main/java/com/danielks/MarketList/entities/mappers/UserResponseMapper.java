package com.danielks.MarketList.entities.mappers;

import com.danielks.MarketList.entities.dtos.UserResponseDTO;
import com.danielks.MarketList.security.entities.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface UserResponseMapper {

    @Mapping(source = "id", target = "id")
    @Mapping(source = "username", target = "username")
    @Mapping(source = "roles", target = "roles")
    @Mapping(source = "refreshToken", target = "refreshToken")
    @Mapping(source = "password", target = "password")
    UserResponseDTO toDTO(User user);

    @Mapping(source = "id", target = "id")
    @Mapping(source = "username", target = "username")
    @Mapping(source = "roles", target = "roles")
    @Mapping(source = "refreshToken", target = "refreshToken")
    @Mapping(source = "password", target = "password")
    User toEntity(UserResponseDTO userDTO);
}
