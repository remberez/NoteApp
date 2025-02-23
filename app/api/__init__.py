from fastapi import APIRouter

from core.config import settings
from .notes import router as note_router

router = APIRouter(
    prefix=settings.api.prefix,
)
router.include_router(
    note_router
)
