package com.messenger.controller;

import com.messenger.dto.model.MessageDto;
import com.messenger.dto.model.Response;
import com.messenger.service.MessageService;
import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/message")
public class MessageController {

    private final MessageService messageService;

    @PostMapping
    @Operation(summary = "send message through http")
    public Response<MessageDto> sendMessage(@Valid @RequestBody MessageDto messageDto) {
        return new Response<>(messageService.save(messageDto));
    }

    @GetMapping
    @Operation(summary = "get messages by chat")
    public Response<Page<MessageDto>> showChat(@RequestParam Long chat, Pageable pageable) {
        return new Response<>(messageService.findByChat(chat, pageable));
    }

    @DeleteMapping
    @Operation(summary = "delete message by id")
    public Response<Void> deleteMessage(@RequestBody Long id) {
        messageService.delete(id);
        return new Response<>("Message was successfully deleted");
    }
}
