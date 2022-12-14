package com.messenger.controller;

import com.messenger.dto.model.PasswordChangeDto;
import com.messenger.dto.model.Response;
import com.messenger.dto.model.UserDto;
import com.messenger.service.AuthService;
import com.messenger.service.UserService;
import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.Valid;
import java.util.Map;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/user")
public class UserController {

    private final UserService userService;
    private final AuthService authService;

    @GetMapping("/{id}")
    @Operation(summary = "find user by id")
    public Response<UserDto> findUserById(@PathVariable Long id) {
        return new Response<>(userService.getUserDtoById(id));
    }

    @GetMapping("/name/{username}")
    @Operation(summary = "find user by username")
    public Response<Page<UserDto>> findUserByUsername(@PathVariable String username, Pageable pageable) {
        return new Response<>(userService.findByName(username, pageable));
    }

    @PutMapping("/password")
    @Operation(summary = "update user's password")
    public Response<Map<String, Object>> updatePassword(@Valid @RequestBody PasswordChangeDto passwordChangeDto) {
        return new Response<>(authService.updatePassword(passwordChangeDto));
    }

    @PutMapping("/name")
    @Operation(summary = "update user's name")
    public Response<UserDto> updateName(@RequestBody String newName) {
        return new Response<>(userService.updateName(newName));
    }

    @PutMapping("/description")
    @Operation(summary = "update user's description")
    public Response<UserDto> updateDescription(@RequestBody String newDescription) {
        return new Response<>(userService.updateDescription(newDescription));
    }

    @PutMapping("/key")
    @Operation(summary = "update user's public key")
    public Response<UserDto> updatePublicKey(@RequestBody String newPublicKey) {
        return new Response<>(userService.updatePublicKey(newPublicKey));
    }

    @PutMapping("/image")
    @Operation(summary = "update user's image")
    public Response<UserDto> updateImage(@RequestParam("image") MultipartFile newImage) {
        return new Response<>(userService.updateImage(newImage));
    }
}
