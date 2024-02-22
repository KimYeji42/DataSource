package com.example.datahub_back.controller.treeController

import com.example.datahub_back.dto.devTree.ChangePage
import com.example.datahub_back.dto.devTree.ChangeTable
import com.example.datahub_back.dto.devTree.Commit
import com.example.datahub_back.dto.devTree.SourceProject
import com.example.datahub_back.service.devTree.BranchService
import com.example.datahub_back.service.devTree.CommitService
import com.example.datahub_back.service.devTree.ProjectService
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api/history")
class HistoryController(
    private val projectService: ProjectService,
    private val branchService: BranchService,
    private val commitService: CommitService
    ) {

    // 프로젝트 목록
    @GetMapping("/{userId}")
    fun retrieveProjects(@PathVariable userId: String): List<SourceProject> =
        projectService.getByUserId(userId)

    // 커밋 목록
    @GetMapping("/{userId}/{projectId}")
    fun retrieveCommits(@PathVariable userId: String, @PathVariable projectId: Long): List<Commit> {
        val branch = branchService.getByProjectIdAndUserId(userId, projectId)
        if (branch != null)
            return commitService.getByBranch(branch.branchId)
        return emptyList()
    }

    // 프론트 변경 리스트 뽑기
    @GetMapping("/frontChanges/{commitId}")
    fun retrieveChangePages(@PathVariable commitId: Long): MutableList<ChangePage>? =
        commitService.getChangePagesByCommitId(commitId)

    // 백엔드 변경 리스트 뽑기
    @GetMapping("/backendChanges/{commitId}")
    fun retrieveChangeTables(@PathVariable commitId: Long): MutableList<ChangeTable>? =
        commitService.getChangeTablesByCommitId(commitId)

}